function Footer() {
  return (
    <section>
      <div className="flex w-full max-lg:flex-col max-lg:w-full">
        <div className="flex flex-col w-1/2 max-lg:w-full">
          <span>Meetio</span>
          <span>Keep in touchnit with Meetio News and updates</span>
          <form className="flex">
            <input placeholder="Email..." type="text" />
            <button>Submit</button>
          </form>
        </div>
        <div className="flex flex-col w-1/2 max-lg:w-full">
          <span className="flex justify-between">
            <span>About</span>
            <span>Resources</span>
            <span>Support</span>
          </span>
          <span className="flex justify-between">
            <span className="flex flex-col">
              <span>Our Team</span>
              <span>About Meetio</span>
              <span>Company News</span>
              <span>Privacy at Meetio</span>
              <span>Investors</span>
              <span>Diversity & Inclusion</span>
              <span>Careers at Meetio</span>
            </span>
            <span className="flex flex-col">
              <span>Meeting Features</span>
              <span>Collaboration Tools</span>
              <span>User Experience & Interaction</span>
              <span>Security & Privacy</span>
            </span>
            <span className="flex flex-col">
              <span>Account</span>
              <span>Support Center</span>
              <span>Contact Us</span>
              <span>Feedback</span>
            </span>
          </span>
        </div>
      </div>
      <div>
        <span>
          <hr />
        </span>
        <span className="flex justify-between">
          <span>2025 Meetio. All rights reserved</span>
          <span className="flex justify-around">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Legal</p>
          </span>
          <span>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </span>
        </span>
      </div>
    </section>
  );
}

export default Footer;
