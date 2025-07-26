import './AdvancedStatistics.css';

const AdvancedStatistics = () => {
  return (
    <div id="statistics">
        <div className="stat-head">
            <h2>Advanced Statistics</h2>
        </div>
        <div className="stat-para">
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="stat-cards">
            <div className="card card-1">
                <div className="card-icon">
                    <i className="fa-solid fa-chart-simple"></i>
                </div>
                <h2>Brand Recognition</h2>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div className="card card-2">
                <div className="card-icon">
                    <i className="fa-solid fa-clipboard"></i>
                </div>
                <h2>Detailed Records</h2>
                <p>Gain insights into who who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className="card card-3">
                <div className="card-icon">
                    <i className="fa-solid fa-hammer"></i>
                </div>
                <h2>Fully Customizable</h2>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
        </div>
    </div>
  )
}

export default AdvancedStatistics;