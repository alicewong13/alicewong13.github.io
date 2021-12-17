import './content.css'
import uniqid from 'uniqid'

function Problem() {
  return (
    <div>
      <section>
        <h2>Problem</h2>
        <p>Users find it difficult to access music they like to listen to.</p>
        <h3>Objectives</h3>
        <ul>
          <li>to identify users&apos; ultimate goals</li>
          <li>to identify users&apos; routines and habits</li>
          <li>to learn about functions that can be improved</li>
        </ul>
      </section>
    </div>
  )
}

function Research() {
  return (
    <div>
      <section>
        <h2>Research</h2>
        <h3>Research Questions</h3>
        <ul>
          <li>What are the situations in which users use Spotify?</li>
          <li>What features do users use most? How do they use them?</li>
          <li>
            What are some problems that users encounter when using Spotify?
          </li>
        </ul>
        <h3>User Interviews</h3>
        <h4>Who we asked</h4>
        <p>5 undergraduate students familiar with Spotify</p>
        <h4>What we asked about</h4>
        <ul>
          <li>Demographic information</li>
          <li>Overall opinions toward Spotify</li>
          <li>
            Habit and daily routine of using the app (e.g. frequency, devices)
          </li>
          <li>Reasons for the preference for Spotify over other competitors</li>
          <li>Difficulties encountered while using the app</li>
        </ul>
      </section>
    </div>
  )
}

function Insights() {
  return (
    <div>
      <section>
        <h2>Insights</h2>

        <h3>Main Findings</h3>
        <ul>
          <li>
            High user loyalty due to familiarity, popularity, and ease of use
          </li>
          <li>Users want easier ways to customize playlists</li>
          <li>
            Social aspects of Spotify sometimes make users worried about their
            privacy
          </li>
          <li>
            The recommendation system (the radio function) is helpful but
            sometimes repetitive
          </li>
        </ul>
        <h3>User Quotes</h3>
        <p>
          “I make a lot of playlists. I like my own playlists because I know I
          already like the songs in them...they also feel more personal—maybe I
          have songs that remind me of a specific person, mood, or idea.”
          <br />
          <br />
          “I think it&apos;s weird that Spotify is trying to be a social media
          platform...I don&apos;t want what I&apos;m listening to at the moment
          out in public.”
          <br />
          <br />
          “I listen to one song on repeat because I&apos;m too lazy to find
          other songs. So Spotify having that radio feature really helps.”
        </p>
      </section>
    </div>
  )
}

function Concept() {
  return (
    <div>
      <section>
        <h2>Concept</h2>
        <h3>Requirements</h3>
        <ul>
          <li>
            <b>Convenient search: </b>enable users to search for songs, artists,
            or podcasts on every page for easier access.
          </li>
          <li>
            <b>Private mode: </b>have a private mode that will disable sharing
            users&apos; listening activities with friends while the mode is on.
          </li>
          <li>
            <b>Recently played: </b>enable users to view recently played list by
            clicking in the recently played tab on the left panel.
          </li>
          <li>
            <b>Listen later: </b>enable users to mark a song by adding it to
            “listen later” list, which is distinguished from “liked songs”.
          </li>
          <li>
            <b>Better recommendations: </b>allow users to indicate their
            preferences of a particular song to improve the algorithm for
            recommendation.
          </li>
          <li>
            <b>Playlist copying: </b>For each Spotify-generated playlist/radio,
            allow users to copy the entire playlist/radio without manually
            adding each song to user&apos;s own playlist.
          </li>
        </ul>
      </section>
    </div>
  )
}

function Design() {
  return (
    <div>
      <section>
        <h2>Design</h2>
        <h3>Sketches</h3>
        <h3>Hi-fi Mockups</h3>
        <h3>Prototype</h3>
        <iframe
          title={uniqid()}
          src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FgHtZZd38nY9nXqSE1pD1Po%2FPSYCH-124B-Project-2%3Fnode-id%3D31%253A2776%26starting-point-node-id%3D31%253A2776%26scaling%3Dscale-down'
          allowFullScreen='true'
        />
      </section>
    </div>
  )
}

function Testing() {
  return (
    <div>
      <section>
        <h2>Testing</h2>
        <h3>Usability Test</h3>
        <h4>Who we asked</h4>
        <p>
          5 undergraduate students familiar with Spotify that did not
          participate in the user interviews
        </p>
        <h4>What we asked them to do</h4>
        <ol>
          <li>
            identify where private mode is (to see if the button is
            discoverable)
          </li>
          <li>private mode: turn off private mode</li>
          <li>find a playlist and make a copy of it</li>
          <li>search for Song X and add it to queue</li>
          <li>find Song X in Recently Played</li>
          <li>
            add a song to listen later playlist and find it on the listen later
            page
          </li>
          <li>
            indicate that you don&apos;t like this recommended song by Spotify
            and perfer that it not show up again later
          </li>
        </ol>
        <h3>Findings</h3>
        <ul>
          <li>
            Users tend to separate the practical and social parts of Spotify{' '}
          </li>
          <li>Newly implemented features need to be made more explicit</li>
          <li>Users appreciate control over organization of their music</li>
        </ul>
        <h3>Implications</h3>
        <ul>
          <li>User ID lookup should be separated from the search bar</li>
          <li>
            Notifications about new features should be included with updates
          </li>
          <li>
            Playlists and songs should be shown on Recently Played page rather
            than albums and songs
          </li>
        </ul>
        <p>
          New Research Question: Which version of our prototype makes our
          features most discoverable?
        </p>
      </section>
    </div>
  )
}

function Future() {
  return (
    <div>
      <section>
        <h2>Future Research</h2>
        <p>
          Method: Incident diary
          <br />
          <br />
          Research Question: What kinds of issues do users encounter when using
          Spotify?
          <br />
          <br /> It is difficult for people to remember what problems they have
          using an app off the top of their heads, so having participants record
          the incident as it is happening makes the data more accurate. Having
          this kind of data would allow the research team to identify problems
          that need better solutions.
        </p>
      </section>
    </div>
  )
}
export { Problem, Research, Insights, Concept, Design, Testing, Future }
