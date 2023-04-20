function Footer() {
    return <footer class="page-footer deep-purple accent-1">
        <div class="footer-copyright">
            <div class="container">
            © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
  </footer>
}
export { Footer }