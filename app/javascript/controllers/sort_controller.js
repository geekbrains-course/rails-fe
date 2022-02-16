import { Controller } from 'stimulus'
import Rails from '@rails/ujs'

export default class extends Controller {
  static targets = ['results', 'newBtn', 'oldBtn']

  call(event) {
    const sortType = event.target.dataset.sortTypeValue;

    fetch(`/posts/sort?type=${sortType}`)
      .then(res => res.text())
      .then((html) => {
        if (this.hasResultsTarget) {
          this.resultsTarget.innerHTML = html;
        }
      });
  }
}
