<script>
    function generateNumItems(number) {
      let itemString = '';
      for (let i = 0; i < number; i++) {
        itemString += `
          <ion-item>
            <ion-label>Item ${i}</ion-label>
          </ion-item>
        `;
      }

      return itemString;
    }

    function generateList(number = 5) {
      return `
        <ion-list>
          ${generateNumItems(number)}
        </ion-list>
      `;
    }

    function getContent() {
      return document.querySelector('ion-content');
    }

    function scrollToBottom() {
      getContent().scrollToBottom(500);
    }

    function scrollToTop() {
      getContent().scrollToTop(500);
    }


    class PageRoot extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <ion-header translucent="true">
            <ion-toolbar>
              <ion-title>Content</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content fullscreen>
            <p class="ion-padding-start ion-padding-end"><ion-button onclick="scrollToBottom()" expand="block" fill="outline">Scroll To Bottom</ion-button></p>
            ${generateList(15)}
            <p class="ion-padding-start ion-padding-end"><ion-button onclick="scrollToTop()" expand="block" fill="outline">Scroll To Top</ion-button></p>
          </ion-content>
        `;
      }
    }
    customElements.define('page-root', PageRoot);
  </script>