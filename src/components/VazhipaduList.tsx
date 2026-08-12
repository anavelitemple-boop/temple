'use client';

import React, { useState } from 'react';
import { X, MessageCircle, Plus, Trash2 } from 'lucide-react';

interface Vazhipadu {
  name: string;
  malayalamName: string;
  price: number;
  category?: string;
}

interface VazhipaduListProps {
  vazhipadus: Vazhipadu[];
  whatsappNum: string;
}

export default function VazhipaduList({ vazhipadus, whatsappNum }: VazhipaduListProps) {
  const [selectedVazhipadu, setSelectedVazhipadu] = useState<Vazhipadu | null>(null);
  const [devotees, setDevotees] = useState<{ name: string; nakshathram: string }[]>([
    { name: '', nakshathram: '' }
  ]);

  const openBookingModal = (vazhipadu: Vazhipadu) => {
    setDevotees([{ name: '', nakshathram: '' }]);
    setSelectedVazhipadu(vazhipadu);
  };

  const addDevotee = () => {
    setDevotees([...devotees, { name: '', nakshathram: '' }]);
  };

  const removeDevotee = (index: number) => {
    if (devotees.length <= 1) return;
    setDevotees(devotees.filter((_, idx) => idx !== index));
  };

  const updateDevotee = (index: number, field: 'name' | 'nakshathram', value: string) => {
    const updated = [...devotees];
    updated[index][field] = value;
    setDevotees(updated);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVazhipadu) return;

    // Check all fields are filled
    const hasEmpty = devotees.some(d => !d.name.trim() || !d.nakshathram.trim());
    if (hasEmpty) return;

    const totalAmount = selectedVazhipadu.price * devotees.length;
    const devoteesListText = devotees.map((d, idx) => `${idx + 1}. പേര്: ${d.name}, നക്ഷത്രം: ${d.nakshathram}`).join('\n');

    const messageText = `ഹലോ ആനവേലി ക്ഷേത്രം ഭരണസമിതി,

ഞാൻ വഴിപാട് ബുക്ക് ചെയ്യാൻ ആഗ്രഹിക്കുന്നു:
• വഴിപാട്: ${selectedVazhipadu.malayalamName}
• ആകെ തുക: ₹${totalAmount} (${devotees.length} പേർ)

ഭക്തരുടെ വിവരങ്ങൾ:
${devoteesListText}

വിവരങ്ങൾ ദയവായി ക്രമീകരിക്കുമല്ലോ.`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedText}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset state
    setSelectedVazhipadu(null);
    setDevotees([{ name: '', nakshathram: '' }]);
  };

  return (
    <div className="relative">
      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mt-8">
        {vazhipadus.map((v, idx) => (
          <div 
            key={idx} 
            className="bg-cream border border-gold/30 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gold flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-maroon/5 flex items-center justify-center text-lg mb-4 text-gold border border-gold/30">
                🔱
              </div>
              <h3 className="text-lg font-bold text-maroon mb-2">
                {v.malayalamName}
              </h3>
              <div className="text-xl font-extrabold text-gold-dark mt-2">
                ₹{v.price}
              </div>
            </div>

            <button
              onClick={() => openBookingModal(v)}
              className="mt-6 w-full py-2.5 rounded-lg bg-maroon text-cream hover:bg-maroon-light transition-colors font-bold text-sm border border-gold/30 cursor-pointer"
            >
              ബുക്ക് ചെയ്യുക
            </button>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {selectedVazhipadu && (
        <div className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="bg-cream border-2 border-gold rounded-2xl w-full max-w-md p-6 relative shadow-2xl max-h-[90vh] flex flex-col justify-between"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedVazhipadu(null)}
              className="absolute top-4 right-4 text-maroon hover:text-gold transition-colors cursor-pointer z-10"
            >
              <X size={24} />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto pr-1 no-scrollbar flex-grow">
              <h3 className="text-xl font-bold text-maroon mb-2 flex items-center gap-2">
                <span>🪔</span> വഴിപാട് വിവരങ്ങൾ
              </h3>
              
              <div className="bg-maroon-dark/5 p-4 rounded-xl border border-gold/20 mb-6 mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-maroon-light font-bold">വഴിപാട്:</span>
                  <span className="text-sm font-bold text-maroon">{selectedVazhipadu.malayalamName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-maroon-light font-bold">ആകെ തുക:</span>
                  <span className="text-base font-extrabold text-gold-dark">₹{selectedVazhipadu.price * devotees.length} ({devotees.length} പേർ)</span>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="space-y-4">
                  {devotees.map((devotee, index) => (
                    <div key={index} className="border border-gold/20 p-4 rounded-xl bg-gold/5 relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-gold-dark">ഭക്തൻ #{index + 1}</span>
                        {devotees.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeDevotee(index)}
                            className="text-red-600 hover:text-red-700 cursor-pointer"
                            aria-label="Remove person"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-maroon mb-1">പേര്</label>
                          <input 
                            type="text" 
                            value={devotee.name}
                            onChange={e => updateDevotee(index, 'name', e.target.value)}
                            placeholder="പേര്" 
                            required
                            className="w-full px-3 py-2 rounded-lg border border-gold/20 bg-cream text-maroon font-bold text-xs focus:outline-none focus:border-gold"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-maroon mb-1">നക്ഷത്രം</label>
                          <input 
                            type="text" 
                            value={devotee.nakshathram}
                            onChange={e => updateDevotee(index, 'nakshathram', e.target.value)}
                            placeholder="നക്ഷത്രം" 
                            required
                            className="w-full px-3 py-2 rounded-lg border border-gold/20 bg-cream text-maroon font-bold text-xs focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add More Person Button */}
                <button
                  type="button"
                  onClick={addDevotee}
                  className="w-full py-2 border-2 border-dashed border-maroon/30 hover:border-maroon text-maroon hover:bg-maroon/5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Plus size={14} />
                  <span>മറ്റൊരു ഭക്തനെ ചേർക്കുക</span>
                </button>

                <button
                  type="submit"
                  className="w-full mt-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp വഴി ബുക്ക് ചെയ്യുക</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
