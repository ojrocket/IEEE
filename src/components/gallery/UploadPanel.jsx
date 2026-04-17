import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, CheckCircle, AlertCircle } from 'lucide-react';

const UploadPanel = ({ onUploadSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Workshops',
    is_featured: false
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, uploading, success, error
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setStatus('uploading');
    const data = new FormData();
    data.append('image', file);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    if (formData.is_featured) data.append('featured', 'true');

    try {
      const response = await fetch('/gallery/api/upload', {
        method: 'POST',
        body: data
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setMessage('Image uploaded successfully!');
        setFormData({ title: '', description: '', category: 'Workshops', is_featured: false });
        setFile(null);
        setPreview(null);
        if (onUploadSuccess) onUploadSuccess();
      } else {
        setStatus('error');
        setMessage(result.error || 'Upload failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error occurred');
    }
  };

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-ieee-dark flex items-center justify-center text-white">
            <Upload className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-ieee-dark uppercase tracking-tight">Admin Upload Panel</h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Add new memories to the gallery</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="relative group">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Upload Image</label>
               <label className="border-2 border-dashed border-slate-200 rounded-card p-10 flex flex-col items-center justify-center cursor-pointer hover:border-ieee-accent transition-all bg-slate-50/50 group-hover:bg-slate-50 relative overflow-hidden h-[300px]">
                 {preview ? (
                   <img src={preview} alt="Preview" className="w-full h-full object-cover absolute inset-0" />
                 ) : (
                   <>
                    <Upload className="w-10 h-10 text-slate-300 mb-4" />
                    <span className="text-xs font-bold text-slate-500">Click to select file</span>
                   </>
                 )}
                 <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
               </label>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Event Title"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-ieee-accent outline-none text-sm font-medium transition-all"
                required
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-ieee-accent outline-none text-sm font-bold transition-all appearance-none"
              >
                <option>Workshops</option>
                <option>Hackathons</option>
                <option>Seminars</option>
                <option>Events</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Description</label>
              <textarea 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Say something about this moment..."
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-ieee-accent outline-none text-sm font-medium transition-all h-32 resize-none"
              />
            </div>
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="is_featured"
                checked={formData.is_featured}
                onChange={(e) => setFormData({...formData, is_featured: e.target.checked})}
                className="w-5 h-5 accent-ieee-dark"
              />
              <label htmlFor="is_featured" className="text-xs font-bold text-ieee-dark uppercase tracking-widest cursor-pointer">Mark as Featured</label>
            </div>

            <button 
              type="submit" 
              disabled={status === 'uploading' || !file}
              className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                status === 'uploading' 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-ieee-dark text-white hover:bg-ieee-accent hover:shadow-2xl shadow-ieee-accent/20 active:scale-[0.98]'
              }`}
            >
              {status === 'uploading' ? 'Uploading...' : 'Submit to Gallery'}
            </button>

            {status !== 'idle' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl flex items-center gap-3 border text-sm font-bold ${
                  status === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-rose-50 border-rose-100 text-rose-600'
                }`}
              >
                {status === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                {message}
              </motion.div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadPanel;
