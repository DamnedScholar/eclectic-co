import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />

          <div class="card">
            <div class="vitals">
              <img src="portrait.png" alt="A picture of Holland Wilson, showing an individual in a green hat and red leather jacket staring point-blank at the camera while they consume an ice cream cone." />
              <hr />
              <table>
                <tr>
                  <td>Pronouns</td>
                  <td>Singular "they"</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Office</td>
                  <td>The bar at Van Gogh's Eeterie</td>
                </tr>
                <tr>
                  <td>Seen a cat they didn't want to pet</td>
                  <td>Never</td>
                </tr>
              </table>
            </div>
            <div class="bio">
              <h1>Holland Wilson</h1>
              <h2>Full-Snack Developer</h2>
              <p>I like building things, and I'm pretty good at food. My day job is as a bar jockey at a popular restaurant in Springfield, MO. In my free time, I like to dig into all sorts of topics from urban development, to modern JavaScript frameworks, to the latest in evidence-based pop psychology.</p>

              <p>As a service industry professional with deep roots in the area, I am a public face of Commercial Street, Springfield's historic business district. C-Street is a thriving community of artists, artisans, and unique shops that represents the best Springfield has to offer. I'm happy to function as an organizer and conspirator with all of the great people I see every day.</p>

              <p>In my spare time, I do so many different projects. I've been on a televised cooking competition and personally catered multiple events. I thrive in being given problems to solve that use the skills I have acquired. If you have a problem to solve where some never-before-seen food or a business plan or the detailed pseudocode specification for an app could be the solution, maybe I can help you.</p>
              <ul>
                <li class="email"></li>
                <li class="facebook"></li>
                <li class="instagram"></li>
                <li class="github"></li>
                <li class="linkedin"></li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
