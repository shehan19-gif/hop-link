import './AdvancedStatistics.css';

const AdvancedStatistics = () => {
  return (
    <div id="statistics">
        <div className="stat-head">
            <h2>Shorten Links in Seconds</h2>
        </div>
        <div className="stat-para">
            <p>No fuss, no clutter-just paste, shorten, and share. &#123;Hop.link&#125; turns long URLs into clean, memorable links instantly. Perfect for social media, emails, and hassle-free sharing.</p>
        </div>
        <div className="stat-cards">
            <div className="card card-1">
                <div className="card-icon">
                    <i class="fa-solid fa-link"></i>
                </div>
                <h2>Ultra-Compact Links</h2>
                <p>Long links clutter your posts, emails, and messages &#123;Hop.link&#125; shrinks them into tidy, shareable snippets. Whether you&#39;re tweeting, texting, or printing, short links save space and look professional. No more broken hyperlinks or messy pastes!</p>
            </div>
            <div className="card card-2">
                <div className="card-icon">
                    <i class="fa-solid fa-gift"></i>
                </div>
                <h2>Free Forever, No Strings</h2>
                <p>Unlike other tools that restrict features behind paywalls, &#123;Hop.link&#125; is 💯% free with no ads. Share as many links as you want, anytime. No account required, no sneaky upsells.</p>
            </div>
            <div className="card card-3">
                <div className="card-icon">
                    <i class="fa-solid fa-gauge-high"></i>
                </div>
                <h2>Instant Access</h2>
                <p>Instant Access, No Strings Attached Skip the signups and jump straight to shortening. Share your first shortened URL in seconds - no login walls, no mandatory email collection, just pure functionality when you need it.</p>
            </div>
        </div>
    </div>
  )
}

export default AdvancedStatistics;