import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BookOpen, Building, Heart } from 'lucide-react';

const CoursesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="page-wrapper"
    >
      <section className="section-padding bg-dark text-white" style={{ paddingTop: '150px' }}>
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-headline text-white mb-3"
          >
            Our <span className="text-amethyst">Courses</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lead-text mx-auto"
          >
            Structured programs that teach the skills your life actually runs on.
          </motion.p>
        </div>
      </section>

      {/* Course 1 */}
      <section className="section-padding course-detail-section">
        <div className="container">
          <div className="course-detail-card">
            <div className="course-header">
              <div className="course-icon"><BookOpen size={40} /></div>
              <h2>Financial Wisdom</h2>
              <p className="course-tagline">Understand money before money decides your life.</p>
            </div>
            <div className="course-body">
              <div className="course-desc">
                <p><strong>Financial Wisdom is our flagship program</strong> — 12 complete classes that rebuild the way you think about money from the ground up. This is not a stock market course or an investment tip service. It is a deep, structured education in how money behaves, how wealth is actually created, and why most people work hard their whole life and still stay stuck.</p>
                <p>By the end of these 12 classes you will not just know more — you will think differently.</p>
              </div>
              <div className="course-learn">
                <h3>What You Will Learn:</h3>
                <ul>
                  <li><strong>Money Mindset</strong> — Why your thinking decides your income</li>
                  <li><strong>The Compounding of Life</strong> — How the formula A = P(1+r)ⁿ applies to everything</li>
                  <li><strong>What Money Really Is</strong> — Understanding money beyond notes and numbers</li>
                  <li><strong>Net Worth</strong> — The only number that actually measures your progress</li>
                  <li><strong>Falling in Love with Money</strong> — Building a healthy, guilt-free relationship with wealth</li>
                  <li><strong>How Much Money You Need</strong> — Defining your own freedom benchmark</li>
                  <li><strong>Real Estate as an Asset</strong> — When property builds wealth and when it destroys it</li>
                  <li><strong>Where You Earn From</strong> — Why the source of income matters more than the size</li>
                  <li><strong>The Power of Ecosystem</strong> — How your surroundings decide your ceiling</li>
                  <li><strong>Financial Wisdom</strong> — Knowledge economy, career and long-term thinking</li>
                  <li><strong>Advanced Application</strong> — Putting the frameworks to work in your real life</li>
                  <li><strong>The Final Algorithm</strong> — Bringing it all together into one working system</li>
                </ul>
              </div>
              
              <div className="course-meta mt-5 p-4 bg-light rounded-4">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <h4>Course Format:</h4>
                    <ul className="list-unstyled">
                      <li><CheckCircle size={18} className="text-royal me-2" /> 12 physical classes in our Balotra classroom</li>
                      <li><CheckCircle size={18} className="text-royal me-2" /> Taught in person — classes are not recorded</li>
                      <li><CheckCircle size={18} className="text-royal me-2" /> 2 live sessions every month for continued learning</li>
                      <li><CheckCircle size={18} className="text-royal me-2" /> Limited seats per batch</li>
                    </ul>
                    <p className="mt-3"><strong>Fees:</strong> ₹5,000 + GST</p>
                  </div>
                  <div className="col-md-6">
                    <h4>Who Should Join:</h4>
                    <p>Business owners, salaried professionals, young earners, homemakers managing family finances, and anyone who feels their money disappears without explanation.</p>
                  </div>
                </div>
              </div>
              
              <div className="course-cta mt-5 text-center">
                <a href="https://wa.me/917340094647?text=FW" className="btn-editorial" target="_blank" rel="noreferrer">
                  Send "FW" on WhatsApp to 7340094647 <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course 2 */}
      <section className="section-padding bg-light course-detail-section">
        <div className="container">
          <div className="course-detail-card">
            <div className="course-header">
              <div className="course-icon"><Building size={40} /></div>
              <h2>Real Estate Wealth Building</h2>
              <p className="course-tagline">Buy land with knowledge, not with emotion.</p>
            </div>
            <div className="course-body">
              <div className="course-desc">
                <p>Property is the most trusted investment in our region — and also the most misunderstood. Most people buy on advice, rumour or emotion, and then wait years hoping the price rises.</p>
                <p>This course teaches you to read property the way an investor does: what makes land actually appreciate, how to judge location and timing, what to check before you pay, and how real estate fits into your overall wealth plan.</p>
              </div>
              <div className="course-learn">
                <h3>What You Will Learn:</h3>
                <ul>
                  <li>How property value is actually created</li>
                  <li>Judging location, timing and future growth</li>
                  <li>The difference between an asset and a stuck investment</li>
                  <li>Paperwork, verification and the risks to avoid</li>
                  <li>Using property as a long-term wealth engine</li>
                </ul>
              </div>
              
              <div className="course-meta mt-5 p-4 bg-white rounded-4 border">
                <h4>Who Should Join:</h4>
                <p>First-time buyers, investors, and families planning to put a large part of their savings into property.</p>
              </div>
              
              <div className="course-cta mt-5 text-center">
                <a href="https://wa.me/917340094647?text=RealEstate" className="btn-outline-editorial" target="_blank" rel="noreferrer">
                  Enquire on WhatsApp <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course 3 */}
      <section className="section-padding course-detail-section">
        <div className="container">
          <div className="course-detail-card">
            <div className="course-header">
              <div className="course-icon"><Heart size={40} /></div>
              <h2>Relationship Mastery</h2>
              <p className="course-tagline">Wealth outside is meaningless without peace inside.</p>
            </div>
            <div className="course-body">
              <div className="course-desc">
                <p>Every successful life stands on relationships — with your partner, your parents, your children, your team. Yet no one ever teaches us how to build them.</p>
                <p>Relationship Mastery is a practical program on understanding people, communicating without conflict, handling expectations, and building a home where growth is possible.</p>
              </div>
              <div className="course-learn">
                <h3>What You Will Learn:</h3>
                <ul>
                  <li>Understanding why conflicts really happen</li>
                  <li>Communication that solves instead of escalates</li>
                  <li>Managing expectations in family and work</li>
                  <li>Building trust and emotional stability</li>
                  <li>Balancing ambition with home life</li>
                </ul>
              </div>
              
              <div className="course-meta mt-5 p-4 bg-light rounded-4">
                <h4>Who Should Join:</h4>
                <p>Couples, parents, business owners managing teams, and anyone who wants a calmer, stronger home.</p>
              </div>
              
              <div className="course-cta mt-5 text-center">
                <a href="https://wa.me/917340094647?text=RelationshipMastery" className="btn-outline-editorial" target="_blank" rel="noreferrer">
                  Enquire on WhatsApp <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who It's For Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <h2 className="section-title-large text-center mb-5">NEXORA Is For <span className="text-amethyst">You If…</span></h2>
          <div className="who-its-for-grid">
            <div className="who-card">
              <CheckCircle size={24} className="text-amethyst mb-3" />
              <p>You earn well but never seem to save</p>
            </div>
            <div className="who-card">
              <CheckCircle size={24} className="text-amethyst mb-3" />
              <p>You want to invest but do not know where to begin</p>
            </div>
            <div className="who-card">
              <CheckCircle size={24} className="text-amethyst mb-3" />
              <p>You are planning to buy property and want to decide wisely</p>
            </div>
            <div className="who-card">
              <CheckCircle size={24} className="text-amethyst mb-3" />
              <p>You are young and want to build the right habits early</p>
            </div>
            <div className="who-card">
              <CheckCircle size={24} className="text-amethyst mb-3" />
              <p>You run a business and want clarity on money, not just accounts</p>
            </div>
            <div className="who-card">
              <CheckCircle size={24} className="text-amethyst mb-3" />
              <p>You want your family to grow together, not drift apart</p>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default CoursesPage;
