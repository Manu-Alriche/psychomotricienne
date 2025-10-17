const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-10">
      <aside>
        <p className="font-semibold">
          © {new Date().getFullYear()} - Marion Couasse, Psychomotricienne D.E{" "}
          <br />1 bis rue du stade, 14860 Ranville — Tel : 06.27.37.57.87
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
