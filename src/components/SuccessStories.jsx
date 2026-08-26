import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, Quote } from 'lucide-react';

const stories = [
  {
    id: 1,
    brandName: "Evora",
    founders: "Kaushalya (Renu) & Chinki Rajpurohit",
    tagline: "Building a Brand Together",
    shortDesc: "From being students who wanted to learn about managing money, to founders running their own startup. The journey from confusion to building 'Evora'.",
    content: [
      {
        author: "Kaushalya urff (Renu Rajpurohit)",
        text: `Honestly, jab mene Nexora ki Financial Wisdom ki one-month class join kri thi tab mujhe bilkul idea nhi tha ki is class mai mujhe itna kuch sikhne ko milega. Starting ke 1-2 days toh mujhe ye bhi properly samajh nahi aa raha tha ki exactly kya ho raha hai or iska meri life mai kya use hoga.

Lekin jese -jese class aage badhi, wese-wese har cheez ekdum clear hoti gayi. Is class mai mene finance ko sirf ek subject ki tarah nhi, balki real life ka important part samjhna sikha. Pehle finance mere liye ek esi cheez thi jiske bare mai mujhe jyada knowledge nhi tha Lekin is class ke bad mujhe finance ki importance pata chali. Paiso ko sirf kamana nhi, manage karna bhi. Mujhe samajh aaya ki sirf paise kamana hi important nhi hai, balki unhe shi tarike se manage karna bhi important hai.

Class se pehle meri daily life kuch esi thi ki mai khana khati thi, ghar ka thoda boht kaam karti thi, baki time phone chlati thi or fir so jati thi. Lekin is class ke bad mujhe laga ki life mai sirf time pass karna nhi hai, kuch karna bhi hai. Or isi mindset ke sath hmne apna khud ka business Evora start kiya.

Sabse special kya laga pata hai.. Nexora ki class mujhe isliye alg lagi kyuki mujhe ye knowledge school, college va kisi normal coaching centre mai kabhi nhi mila. Mahesh Rajpurohit Sir ne jis tarike se class li or concepts ko explain kiya, usse mujhe boht kuch sikhne ko mila. Starting mai mujhe kuch samajh nhi aa raha tha, lekin mene patience rakha or dhire-dhire sab kuch ekdum ache se clear hone laga.

Aaj main confidently keh sakti hu ki Nexora ki ye one-month class mere liye sirf ek course nhi tha, balki meri thinking or meri life ko ek naya direction dene wala experience tha. Thank you Nexora and Mahesh Rajpurohit Sir for giving me knowledge, confidence and most importantly, ek nayi direction.`
      },
      {
        author: "Chinki Rajpurohit",
        text: `Jab maine Nexora ki Financial Wisdom class join ki thi, honestly mujhe bilkul idea nahi tha ki ye class meri life ko itna change kar degi. Main sirf financial knowledge lene ke intention se class mein gayi thi, lekin wahan mujhe money mindset, business, financial clarity aur apni skills ko income mein convert karne ka ek completely different perspective mila.

Aaj main Evora naam ka apna business kar rahi hoon. Aur agar main honestly kahun, toh business karna bilkul easy nahi hota. Har din naye challenges aate hain. Lekin in sab ke bawajood mujhe apne kaam mein jo satisfaction aur excitement milti hai, woh mujhe kisi corporate job mein nahi milti thi. Main apne business ko lekar genuinely obsessed hoon.

Nexora se pehle mujhe money ke baare mein ek basic understanding thi, lekin financial education ka real meaning nahi pata tha. Mere bachpan se hi ek dream tha ki main apne liye kuch bada karun, kuch apna build karun. Lekin dream toh tha, guidance nahi thi. Nexora ke baad mujhe direction mili.

Aaj jab main peeche mudkar dekhti hoon, toh mujhe lagta hai ki agar maine Nexora join nahi ki hoti, toh shayad main abhi bhi wahi corporate job kar rahi hoti. Mahesh Rajpurohit Sir ne sirf financial concepts nahi sikhaye, balki ek aisa mindset diya jisne mujhe apne dreams ko seriously lena sikhaya.

I joined Nexora to learn about money. I left with the mindset to build something of my own. ❤️`
      }
    ],
    bgClass: "evora-bg"
  },
  {
    id: 2,
    brandName: "Vibe Verse",
    founders: "Yachika Bindal & Garima",
    tagline: "Event Management at its Finest",
    shortDesc: "Two Nexora students teamed up to start Vibe Verse Event Management. Delivering trust, quality, and making every celebration magical for Balotra.",
    content: [
      {
        author: "Yachika & Garima",
        text: `As students of Nexora, we learned that true wealth is built by creating value and taking initiative. We applied these exact principles to launch Vibe Verse Event Management. 

Starting a business wasn't easy, but the mindset we developed at Nexora gave us the courage to step into the entrepreneurial world. We learned how to manage finances, structure our business, and most importantly, we learned that with patience and the right direction, we could build something of our own.

Today, Vibe Verse is making celebrations magical across Balotra, and it all started with a change in perspective in the Nexora classroom. We are delivering trust and quality, and creating smiles everywhere we go.`
      }
    ],
    bgClass: "vibeverse-bg",
    instagram: "@vibeverse_balotra"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
  })
};

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    if (selectedStory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedStory]);

  return (
    <section className="section-padding ss-section" id="success-stories">
      <div className="ss-bg-decor">
        <div className="ss-bg-orb orb-1"></div>
        <div className="ss-bg-orb orb-2"></div>
      </div>

      <div className="container ss-container">
        <div className="ss-header">
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="about-label ss-label"
          >
            07. ALUMNI SUCCESS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-title-large ss-title"
          >
            From Classroom to <span className="text-royal">Boardroom</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="ss-subtitle"
          >
            Nexora isn't just about learning concepts; it's about transformation. Meet our students who took their financial education and built their own companies.
          </motion.p>
        </div>

        <div className="ss-grid">
          {stories.map((story, idx) => (
            <motion.div 
              key={story.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              className={`ss-card ${story.bgClass}`}
            >
              <div className="ss-card-icon">
                <Star size={80} />
              </div>

              <div className="ss-card-content">
                <h3 className="ss-card-title">{story.brandName}</h3>
                <p className="ss-card-founders">By {story.founders}</p>
                
                <p className="ss-card-desc">"{story.shortDesc}"</p>

                {story.instagram && (
                  <div className="ss-card-insta">
                    <span className="insta-label">Instagram:</span>
                    <span className="insta-handle">{story.instagram}</span>
                  </div>
                )}

                <button 
                  onClick={() => setSelectedStory(story)}
                  className="ss-card-btn"
                >
                  <span className="btn-text-wrapper">
                    <span className="btn-text">Read Full Story</span>
                  </span>
                  <ArrowRight size={18} className="btn-arrow" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ss-modal-overlay"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="ss-modal-box"
              onClick={e => e.stopPropagation()}
            >
              <div className="ss-modal-header">
                <div>
                  <h3 className="ss-modal-title">{selectedStory.brandName}</h3>
                  <p className="ss-modal-founders">Founded by {selectedStory.founders}</p>
                </div>
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="ss-modal-close"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="ss-modal-body custom-scrollbar">
                <div className="ss-modal-stories">
                  {selectedStory.content.map((block, idx) => (
                    <div key={idx} className="ss-modal-story-block">
                      <Quote className="ss-quote-icon" />
                      <div className="ss-story-content">
                        <h4 className="ss-story-author">
                          <div className="ss-author-line"></div>
                          {block.author}
                        </h4>
                        <div className="ss-story-text">
                          {block.text.split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="ss-modal-footer">
                  <p>This is a real story from the Nexora Classroom.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SuccessStories;
