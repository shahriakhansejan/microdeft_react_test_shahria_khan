import moment from "moment";

const Footer = () => {
  return (
    <div className="bg-[#151515]">
      <footer className="footer footer-center text-white p-4">
        <aside>
          <p>
            Copyright © {moment().format("YYYY")} - All rights reserved by
            MicroDeft Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
