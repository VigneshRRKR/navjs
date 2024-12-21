    <script>
        function navigateHome() {
            const content = document.getElementById('content');
            content.innerHTML = `
                <h1>Welcome to Home</h1>
                <p>This is the Home section dynamically rendered by JavaScript.</p>
            `;
            console.log("Navigated to Home section.");
        }

        function navigateAbout() {
            const content = document.getElementById('content');
            content.innerHTML = `
                <h1>About Me</h1>
                <p>This is the About section where you can learn more about me!</p>
            `;
            console.log("Navigated to About section.");
        }

        function navigateServices() {
            const content = document.getElementById('content');
            content.innerHTML = `
                <h1>My Services</h1>
                <ul>
                    <li>Web Development</li>
                    <li>Web Design</li>
                    <li>SEO Optimization</li>
                </ul>
            `;
            console.log("Navigated to Services section.");
        }

        function navigateContact() {
            const content = document.getElementById('content');
            content.innerHTML = `
                <h1>Contact Me</h1>
                <p>Feel free to reach out via email at: <a href="mailto:example@example.com">example@example.com</a></p>
            `;
            console.log("Navigated to Contact section.");
        }
    </script>