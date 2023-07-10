function Footer() {
  const yearNow = new Date().getUTCFullYear()
  return (
    <footer className="footer footer-center p-4 bg-success-content text-base-content">
    <div>
      <p>Copyright © {yearNow} - RMFN</p>
    </div>
  </footer>
  )
}

export default Footer