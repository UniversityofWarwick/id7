import { html } from 'lit-html';
import { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      codePanel: true
    }
  }
};

export default preview;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  
];

const fullId7Decorator = (story, context) => html`
    <div class="id7-left-border"></div>
    <div class="id7-fixed-width-container">
      <a class="sr-only sr-only-focusable" href="#main">Skip to main content</a>

      <header class="id7-page-header">
        <div class="id7-utility-masthead">
          <nav class="id7-utility-bar" aria-label="Utility bar">
            <!-- Include the utility bar component here if used -->
          </nav>

          <div class="id7-masthead">
            <div class="id7-masthead-contents">
              <div class="clearfix">
                <div class="id7-logo-column">
                  <!-- Don't include the logo row on non-branded sites -->
                  <div class="id7-logo-row">
                    <div class="id7-logo">
                      <a href="https://warwick.ac.uk" title="University of Warwick homepage">
                        <img src="/images/wordmark.svg" alt="University of Warwick homepage">
                      </a>
                    </div>
                    <nav class="id7-site-links" aria-label="Site links">
                      <ul>
                        <li><a href="https://warwick.ac.uk/study">Study</a></li>
                        <li><a href="https://warwick.ac.uk/research">Research</a></li>
                        <li><a href="https://warwick.ac.uk/business">Business</a></li>
                        <li><a href="https://warwick.ac.uk/alumni">Alumni</a></li>
                        <li><a href="https://warwick.ac.uk/news">News</a></li>
                        <li><a href="https://warwick.ac.uk/engagement">Engagement</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="id7-search-column">
                  <div class="id7-search">
                    <form action="//search.warwick.ac.uk/website" role="search">
                      <input type="hidden" name="source" value="https://warwick.ac.uk/"> <!-- Replace with the current page URL -->
                      <div class="form-group">
                        <div class="id7-search-box-container floating-label">
                          <input type="search" class="form-control input-lg" id="id7-search-box" name="q" placeholder="Search Warwick" data-suggest="go" aria-label="Search Warwick">
                          <label for="id7-search-box">Search Warwick</label>
                          <button type="submit" class="search-button"><span class="sr-only">Search</span><i class="fas fa-search fa-2x"></i></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="id7-header-text clearfix">
                <h2 class="h1">
                  <!-- Parent site link often excluded -->
                  <!-- <span class="id7-parent-site-link"><a href="#">Parent site name</a></span> -->
                  <span class="id7-current-site-link"><a href="#">Storybook</a></span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Docs master nav -->
        <div class="id7-navigation">
          <!-- Include the navigation component here if used -->
        </div>
      </header>

      <!-- Page content of course! -->
      <main class="id7-main-content-area" id="main">
        <header class="id7-main-content-header">
          <div class="id7-page-title">
            <h1>${context.story}</h1>
          </div>
        </header>

        <div class="id7-main-content">
          ${story()}
        </div>
      </main>

      <footer class="id7-page-footer">
        <div class="id7-site-footer">
          <div class="id7-site-footer-content">

            Your site footer content
          </div>
        </div>
        <div class="id7-app-footer">
          <div class="id7-app-footer-content">
            <div class="id7-footer-utility">
              <ul>
                <li>Powered by <a href="https://warwick.ac.uk/sitebuilder">App name</a></li>
                <li><a href="https://warwick.ac.uk/copyright">© MMXXV</a></li>
                <li><a href="https://warwick.ac.uk/terms">Terms</a></li>
                <li><a href="https://warwick.ac.uk/privacy">Privacy</a></li>
                <li><a href="https://warwick.ac.uk/cookies">Cookies</a></li>
                <li><a href="https://warwick.ac.uk/accessibility">Accessibility</a></li>
                <li><a href="https://warwick.ac.uk/modernslavery">Modern Slavery Statement</a></li>
                <li><a href="https://warwick.ac.uk/conduct">Student Harassment and Sexual Misconduct</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <div class="id7-right-border"></div>
  `;
