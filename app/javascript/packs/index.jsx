import React from "react";
import { render } from "react-dom";
import App from "../src/components/App";
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';
import "trix"
import "@rails/actiontext"
import "src/profile.js"
import "src/post.js"
require("controllers")

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener("DOMContentLoaded", () => {
	render(<App/>, document.body.appendChild(document.createElement("div")));
});
