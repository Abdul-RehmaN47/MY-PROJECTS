import './conatct.css';
export default function Contact() {
  return (
    <center id='contact'>
      <h2 style={{ marginTop: '50px', color: '#FFD700' }}>
        <u>For Contact</u>
      </h2>
      <div className="con">
        <form action="">
          <label htmlFor="name" className='label'>Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="input"
          />
          <label htmlFor="email" className='label'>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="input"
          />
          <label htmlFor="phone" className='label'>Phone No:</label>
          <input
            type="number"
            id="phone"
            placeholder="Enter your phone number"
            className="input"
          />
          <label htmlFor="message" className='label'>Message:</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="input message-box"
          />
        </form>
        <button
          type="button"
          className="btn btn-outline-warning"
          style={{ margin: '30px 0' }}
        >
          SEND
        </button>
      </div>
    </center>
  );
}
