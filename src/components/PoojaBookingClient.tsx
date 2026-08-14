'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MessageCircle, X, Plus, Trash2, User, Sparkles } from 'lucide-react';

interface PoojaItem {
  id: string;
  name: string;
  malayalamName: string;
  price: number;
  time: string;
  category: 'daily' | 'friday' | 'vazhipadu';
  description: string;
}

interface Devotee {
  name: string;
  nakshathram: string;
}

interface StoredBooking {
  id: string;
  poojaName: string;
  date: string;
  devotees: Devotee[];
  totalAmount: number;
  createdAt: string;
}

const DEFAULT_POOJAS: PoojaItem[] = [
  {
    id: 'd1',
    name: 'Devi Pooja',
    malayalamName: 'ദേവി പൂജ',
    price: 500,
    time: '',
    category: 'daily',
    description: 'ഭദ്രകാളി ദേവിക്ക് നടത്തുന്ന പ്രത്യേക കുടുംബൈശ്വര്യ മഹാദേവി പൂജ.'
  }
];

const INITIAL_BOOKINGS: StoredBooking[] = [
  {
    id: 'b-101',
    poojaName: 'ദേവി പൂജ',
    date: '2026-08-14',
    devotees: [
      { name: 'അനന്ദകൃഷ്ണൻ', nakshathram: 'രോഹിണി' }
    ],
    totalAmount: 500,
    createdAt: '2026-08-12T14:30:00.000Z'
  }
];

interface PoojaBookingClientProps {
  whatsappNum?: string;
  cmsPoojaName?: string;
  cmsPoojaPrice?: number;
  cmsPoojaDescription?: string;
  cmsPoojasList?: Array<{
    _id?: string;
    name?: string;
    malayalamName?: string;
    price?: number;
    description?: string;
    time?: string;
  }>;
}

export default function PoojaBookingClient({ 
  whatsappNum = '919895873935',
  cmsPoojaName,
  cmsPoojaPrice,
  cmsPoojaDescription,
  cmsPoojasList
}: PoojaBookingClientProps) {
  const activePoojaName = cmsPoojaName || DEFAULT_POOJAS[0].malayalamName;
  const activePoojaPrice = cmsPoojaPrice || DEFAULT_POOJAS[0].price;

  // Build full pooja options list from CMS poojas or default fallback
  const availablePoojas: PoojaItem[] = (cmsPoojasList && cmsPoojasList.length > 0)
    ? cmsPoojasList.map((p, idx) => ({
        id: p._id || `pooja-${idx}`,
        name: p.name || p.malayalamName || 'Pooja',
        malayalamName: p.malayalamName || p.name || 'പൂജ',
        price: p.price || 0,
        time: p.time || '',
        category: 'daily',
        description: p.description || ''
      }))
    : [
        {
          id: 'd1',
          name: 'Devi Pooja',
          malayalamName: activePoojaName,
          price: activePoojaPrice,
          time: '',
          category: 'daily',
          description: cmsPoojaDescription || DEFAULT_POOJAS[0].description
        }
      ];

  const [selectedPooja, setSelectedPooja] = useState<PoojaItem | null>(null);

  useEffect(() => {
    if (availablePoojas.length > 0) {
      setSelectedPooja(availablePoojas[0]);
    }
  }, [cmsPoojasList]);

  const [bookingDate, setBookingDate] = useState<string>('');
  const [devotees, setDevotees] = useState<Devotee[]>([{ name: '', nakshathram: '' }]);
  const [bookedList, setBookedList] = useState<StoredBooking[]>([]);
  const [currentDateInfo, setCurrentDateInfo] = useState<{ formattedDate: string; dayMalayalam: string }>({
    formattedDate: '',
    dayMalayalam: ''
  });

  useEffect(() => {
    // Calculate Today's Date in English & Malayalam format
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateStr = today.toLocaleDateString('ml-IN', options);
    
    const daysInMl: { [key: number]: string } = {
      0: 'ഞായറാഴ്ച (Sunday)',
      1: 'തിങ്കളാഴ്ച (Monday)',
      2: 'ചൊവ്വാഴ്ച (Tuesday)',
      3: 'ബുധനാഴ്ച (Wednesday)',
      4: 'വ്യാഴാഴ്ച (Thursday)',
      5: 'വെള്ളിയാഴ്ച (Friday)',
      6: 'ശനിയാഴ്ച (Saturday)'
    };

    setCurrentDateInfo({
      formattedDate: today.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      dayMalayalam: daysInMl[today.getDay()] || dateStr
    });

    // Default next date in YYYY-MM-DD
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    setBookingDate(tomorrow.toISOString().split('T')[0]);

    // Load existing stored bookings from localStorage if available
    try {
      const stored = localStorage.getItem('anaveli_temple_pooja_bookings');
      if (stored) {
        setBookedList(JSON.parse(stored));
      } else {
        setBookedList(INITIAL_BOOKINGS);
      }
    } catch {
      setBookedList(INITIAL_BOOKINGS);
    }
  }, []);

  const openModal = (pooja: PoojaItem) => {
    setSelectedPooja(pooja);
    setDevotees([{ name: '', nakshathram: '' }]);
  };

  const closeModal = () => {
    setSelectedPooja(null);
  };

  const addDevotee = () => {
    setDevotees([...devotees, { name: '', nakshathram: '' }]);
  };

  const removeDevotee = (index: number) => {
    if (devotees.length <= 1) return;
    setDevotees(devotees.filter((_, i) => i !== index));
  };

  const updateDevotee = (index: number, field: keyof Devotee, value: string) => {
    const updated = [...devotees];
    updated[index][field] = value;
    setDevotees(updated);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPooja || !bookingDate) return;

    const hasEmpty = devotees.some(d => !d.name.trim() || !d.nakshathram.trim());
    if (hasEmpty) {
      alert('ദയവായി പേരും നക്ഷത്രവും പൂരിപ്പിക്കുക');
      return;
    }

    const totalAmount = selectedPooja.price * devotees.length;

    // Create record for public visibility list
    const newBooking: StoredBooking = {
      id: 'b-' + Date.now(),
      poojaName: selectedPooja.malayalamName,
      date: bookingDate,
      devotees: [...devotees],
      totalAmount,
      createdAt: new Date().toISOString()
    };

    const updatedBookings = [newBooking, ...bookedList];
    setBookedList(updatedBookings);
    try {
      localStorage.setItem('anaveli_temple_pooja_bookings', JSON.stringify(updatedBookings));
    } catch (err) {
      console.error(err);
    }

    // Format WhatsApp text
    const devoteesText = devotees
      .map((d, i) => `${i + 1}. പേര്: ${d.name}, നക്ഷത്രം: ${d.nakshathram}`)
      .join('\n');

    const whatsappMessage = `ഹലോ ആനവേലി ക്ഷേത്രം ഭരണസമിതി,

ഞാൻ പൂജ ബുക്ക് ചെയ്യാൻ ആഗ്രഹിക്കുന്നു:
• പൂജ / വഴിപാട്: ${selectedPooja.malayalamName}
• തീയതി: ${bookingDate}
• ആകെ തുക: ₹${totalAmount} (${devotees.length} പേർ)

ഭക്തരുടെ വിവരങ്ങൾ:
${devoteesText}

വിവരങ്ങൾ ദയവായി ക്രമീകരിക്കുമല്ലോ.`;

    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNum}?text=${encoded}`, '_blank');

    closeModal();
  };

  const dailyPoojas = DEFAULT_POOJAS.filter(p => p.category === 'daily');
  const fridayPoojas = DEFAULT_POOJAS.filter(p => p.category === 'friday');
  const vazhipadukal = DEFAULT_POOJAS.filter(p => p.category === 'vazhipadu');

  return (
    <div className="space-y-12">
      {/* 1. TODAY'S DATE CARD ("ഇന്ന് ഏത് ദിവസമാണ്") */}
      <div className="bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark text-cream border-2 border-gold/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center max-w-3xl mx-auto">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">
          <Calendar size={18} className="text-gold" />
          <span>ഇന്ന് ഏത് ദിവസമാണ്</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-300 tracking-wide mt-1">
          {currentDateInfo.dayMalayalam}
        </h2>
        <p className="text-cream/90 font-bold text-sm sm:text-base mt-2">
          ഇന്നത്തെ തീയതി: <span className="text-gold font-extrabold">{currentDateInfo.formattedDate}</span>
        </p>

        {/* Highlighted Pooja info badge */}
        <div className="mt-5 inline-flex items-center gap-3 bg-black/30 border border-gold/30 px-4 py-2 rounded-2xl">
          <span className="text-sm">🪔</span>
          <span className="text-xs sm:text-sm font-bold text-gold">{activePoojaName} - ₹{activePoojaPrice}</span>
        </div>

        <div className="mt-6 pt-4 border-t border-gold/30 flex justify-center">
          <button
            onClick={() => openModal(availablePoojas[0])}
            className="px-7 py-3 rounded-full bg-gold hover:bg-gold-light text-maroon-dark font-extrabold text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Calendar size={18} />
            <span>പൂജ ബുക്ക് ചെയ്യുക</span>
          </button>
        </div>
      </div>









      {/* 6. BOOKING FORM MODAL */}
      {selectedPooja && (
        <div className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="bg-cream border-2 border-gold rounded-3xl w-full max-w-md p-6 relative shadow-2xl max-h-[90vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-maroon hover:text-gold transition-colors cursor-pointer z-10 p-1"
            >
              <X size={22} />
            </button>

            <div className="overflow-y-auto pr-1 flex-grow">
              <div className="flex items-center gap-2 text-gold-dark font-extrabold text-xs uppercase tracking-wider mb-2">
                <span>🪔</span> പൂജ ബുക്കിംഗ്
              </div>

              {/* Pooja Selection Dropdown */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-maroon mb-1">
                  പൂജ തിരഞ്ഞെടുക്കുക (Select Pooja)
                </label>
                <select
                  value={selectedPooja.id}
                  onChange={(e) => {
                    const found = availablePoojas.find(p => p.id === e.target.value);
                    if (found) setSelectedPooja(found);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl border border-gold/40 bg-white text-maroon font-bold text-sm focus:outline-none focus:border-gold shadow-sm"
                >
                  {availablePoojas.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.malayalamName} (₹{p.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Details */}
              <div className="bg-maroon/5 border border-gold/30 rounded-2xl p-4 mb-5">
                <div className="flex justify-between items-center text-xs text-maroon font-bold mb-1">
                  <span>നിരക്ക് (ഒരാൾക്ക്):</span>
                  <span className="text-sm text-gold-dark font-extrabold">₹{selectedPooja.price}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-maroon font-bold">
                  <span>ആകെ തുക ({devotees.length} പേർ):</span>
                  <span className="text-base text-maroon font-extrabold">₹{selectedPooja.price * devotees.length}</span>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-5">
                {/* Date Selection */}
                <div>
                  <label className="block text-xs font-bold text-maroon mb-1 flex items-center gap-1">
                    <Calendar size={14} className="text-gold" />
                    <span>പൂജ നടത്തേണ്ട തീയതി (Date)</span>
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gold/30 bg-white text-maroon font-bold text-xs focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Devotees List */}
                <div className="space-y-4">
                  <div className="text-xs font-bold text-maroon flex items-center justify-between">
                    <span>ഭക്തരുടെ വിവരങ്ങൾ (Name & Star)</span>
                    <span className="text-[10px] text-maroon-light">{devotees.length} പേർ</span>
                  </div>

                  {devotees.map((devotee, index) => (
                    <div key={index} className="border border-gold/25 p-3.5 rounded-2xl bg-gold/5 relative space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] font-extrabold text-gold-dark">ഭക്തൻ #{index + 1}</span>
                        {devotees.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeDevotee(index)}
                            className="text-red-600 hover:text-red-700 cursor-pointer p-1"
                            aria-label="Remove devotee"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-maroon mb-1">പേര് (Name)</label>
                        <input
                          type="text"
                          value={devotee.name}
                          onChange={(e) => updateDevotee(index, 'name', e.target.value)}
                          placeholder="ഭക്തന്റെ പേര് നൽകുക"
                          required
                          className="w-full px-3 py-2 rounded-xl border border-gold/20 bg-white text-maroon font-bold text-xs focus:outline-none focus:border-gold"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-maroon mb-1">നക്ഷത്രം (Naal / Star)</label>
                        <input
                          type="text"
                          value={devotee.nakshathram}
                          onChange={(e) => updateDevotee(index, 'nakshathram', e.target.value)}
                          placeholder="ഉദാ: രോഹിണി, അശ്വതി, ചോതി"
                          required
                          className="w-full px-3 py-2 rounded-xl border border-gold/20 bg-white text-maroon font-bold text-xs focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Devotee Button */}
                <button
                  type="button"
                  onClick={addDevotee}
                  className="w-full py-2.5 border-2 border-dashed border-maroon/30 hover:border-maroon text-maroon hover:bg-maroon/5 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Plus size={14} />
                  <span>മറ്റൊരു ഭക്തനെ കൂടി ചേർക്കുക</span>
                </button>

                {/* Submit WhatsApp Booking */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-transform active:scale-[0.99]"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp വഴി ബുക്കിംഗ് നൽകുക</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
