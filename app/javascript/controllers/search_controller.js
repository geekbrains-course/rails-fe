// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = [ "query", "submitBtn", "results" ]

  submit(event) {
    event.preventDefault();

    const value = this.queryTarget.value;

    Rails.ajax({
      type: "GET",
      url: `/posts/search?q=${value}`,
      success: (_data, _status, xhr) => {
        if (this.hasResultsTarget) {
          this.resultsTarget.innerHTML = xhr.response;
          Rails.enableElement(this.submitBtnTarget);
        }
      }
    })
  }

  reset(event) {
    this.resultsTarget.innerHTML = "";
  }
}
