import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

export function About() {
  return (
    <div className="about content">
      <h2 className="title is-3">Hi, so glad you could visit!</h2>
      <p>
        Rouge is intended to be a directory of local businesses, beginning in
        Toronto. My goal is to make it as easy to use as a certain global online
        marketplace.
      </p>
      <p>
        I'd like to credit all the people who posted on this Reddit thread for
        the initial Toronto shop data:
      </p>
      <p>
        <a
          href="https://www.reddit.com/r/askTO/comments/jzrxef/megathread_support_independent_local_businesses/"
          target="_blank"
        >
          https://www.reddit.com/r/askTO/comments/jzrxef/megathread_support_independent_local_businesses/
        </a>
      </p>
      <p>
        If you see any errors in a shop description, please click on the three
        dots in the top right corner of the card to submit suggestions and I'll
        look into it asap.
      </p>
      <p>
        I would love to hear from you on what would make this app easier and
        more convenient to use. You can get in touch using the{" "}
        <Link to="/Contact">Contact</Link> form on this site.
      </p>
      <p className="subtitle is-4">About me</p>
      <p>
        My name is Andy and I work full-time as a developer for a great tech
        startup in Toronto. I like to volunteer in my free time, play video and
        board games, and work on this app.
      </p>
    </div>
  );
}
