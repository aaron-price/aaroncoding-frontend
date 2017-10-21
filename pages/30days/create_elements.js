import Link from 'next/link'
import 'isomorphic-fetch'
import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import Head from '../../components/Head.js'
import { CodeBlock } from '../../components/CodeBlocks.js'
import { initStore } from '../../redux/store'
import withRedux from 'next-redux-wrapper'
import { return_current_user } from '../../services/current_user.js'


class CreateElement extends Component {
		constructor(props) {
				super(props)
				this.state = {}
		}
		render() {
				return (
						<Head current_user={this.props.current_user}>
								<h1>Vanilla js form</h1>
								<p className="quote_text">Goal: Take a js array and turn it into form fields</p>
								<p className="quote_text">
								Challenge: I may NOT use any React or any other framework/library/or syntactic sugar. Just plain ol' vanilla javascript creating DOM elements.
								</p>
								<p><strong>MESSAGE FROM THE FUTURE</strong></p>
								<p>So after changing websites, I now have React on every page.
									The vanilla js 'createElement()' api relies on the DOM,
									which gets replaced by React's virtual DOM. So the challenge is
									impossible without breaking the site or doing a ton of extra work.
									But here's what it looked like:</p>
								<form className="form">
										<input name="name" placeholder="name" className="form__name"></input><br/>
										<input name="email" placeholder="email" className="form__email"></input><br />
										<input type="submit" value="Submit"></input>
								</form><br />

								<p>And this was the code</p>
								<CodeBlock>
										{`

<body>
  <form class="form">
  </form>

  <script type="text/javascript">
      // The array to render.
      let fieldsArray = ["name", "email"];

      // js createElement works by injecting new elements into an existing container element. So I need to define that first.
      let containerParent = document.getElementsByClassName("form")[0];

      // Map the array elements into DOM elements
      fieldsArray.map(field => {
          let formEl = document.createElement("INPUT");
          formEl.setAttribute("name", field);
          formEl.setAttribute("placeholder", field);
          formEl.setAttribute("class", "form__" + field);
          containerParent.insertBefore(formEl, null);
      })

      // The submit button
      let submit = document.createElement("INPUT");
      submit.setAttribute("type", "submit");
      submit.setAttribute("value", "Submit");
      containerParent.insertBefore(submit, null);

  </script>

</body>

										`}
								</CodeBlock>
								<p>Wow, my coding style has really changed since then...</p>
						</Head>
				)
		}
}
CreateElement.getInitialProps = async function(context) {
		return {
				current_user: await return_current_user(context),
		}
}
export default withRedux(initStore, null)(CreateElement)
