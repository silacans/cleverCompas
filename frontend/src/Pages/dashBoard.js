
import '../style/dashboard.css'
import Sidebar from '../components/Sidebar'; 


const dashboard = ()=> {
    return (
        <div class="dashboard">
      <Sidebar></Sidebar>
    <div class="main-content">
      <header class="topbar">
        <div class="welcome">Welcome, Tutor!</div>
        <div class="profile">
          <span>John Doe</span>
        </div>
      </header>
      <section class="widgets">
        <div class="widget">
          <h3>Total Students</h3>
          <p>120</p>
        </div>
        <div class="widget">
          <h3>Upcoming Classes</h3>
          <p>5</p>
        </div>
        <div class="widget">
          <h3>New Messages</h3>
          <p>8</p>
        </div>
      </section>
      <section class="content">
        <div class="content-card">
          <h3>Upcoming Classes</h3>
          <ul>
            <li>Math - 10:00 AM</li>
            <li>Physics - 12:00 PM</li>
            <li>English - 2:00 PM</li>
          </ul>
        </div>
        <div class="content-card">
          <h3>Recent Messages</h3>
          <p>Hi Tutor, I need help with algebra!</p>
          <p>Can we schedule an extra session?</p>
        </div>
      </section>
    </div>
  </div>
            
           
        );

}

export default dashboard;