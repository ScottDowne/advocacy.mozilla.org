var React = require(`react`);
var ActivityTemplate = require('./activity-template.js');

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <ActivityTemplate
        title="Postcrimes"
        overview={{
          duration: "45 minutes",
          activityNumber: 1,
          activityTotal: 3,
          contents: (
            <div>
              <p>In this activity you’ll engage your group in building virtual post-cards about outdated copyright laws that get printed out and sent to law-makers!</p><br />

              <p><strong>Your Goal for this Event:</strong> Get as many postcards as possible made and sent to law-makers while learning and having fun!</p><br />

              <p>Some of the concepts can seem daunting but don’t worry! You don’t need to be an expert to run these activities. Below we’ve provided you with all of the information and links that you’ll need to share with the group. No expertise required!</p>
                        
              <h4>What You’ll Need:</h4>
              
              <ul className="fancy">
                <li>Blank nametags</li>
                <li>Coloring and craft supplies for decorating name tags</li>
                <li>Optional: something like <a href="https://chibitronics.com/">chibitronics</a> for decorating name tags</li>
                <li>Internet connected devices like phones, tablets, or laptops</li>
              </ul>
                        
              <h4>Activity Overview:</h4>
              
              <ol className="fancy">
                <li>Hack Your Name Tag</li>
                <li>Introduction to Postcrimes</li>
                <li>Potcrimes</li>
                <li>Reflection</li>
              </ol>
              
                          
              <h4>How to use this activity</h4>

              <p>“Postcrimes” can function as a standalone activity or as part of a longer workshop on copyright reform.</p><br />
              
              <p>Think about how many people are attending, and how long you’ll have them for to decide whether to do this as a standalone or as part of a longer event!</p><br />

              <p><strong><em>If you’d like to run this activity alone:</em></strong></p><br />

              <ol className="fancy">
                <li>Follow all of the steps in this activity.</li>
              </ol>            

              <p><strong><em>If you’d like to run this activity with the other activities in this sequence:</em></strong></p><br />

              <ol className="fancy">
                <li>Frame the “Reflection” section as a pause to reflect rather than as an exit activity.</li>
                <li>Run the “Meme Around” activity after this one.</li>
              </ol>           

              <p><strong><em>If you’d like to run this activity as part of a rotation of stations or tables that people visit for 15-30 minutes at a time during your event:</em></strong></p><br />
              
              <ol className="fancy">
                <li>Identify a facilitator for each station ahead of your event.</li>
                <li>Train each facilitator on the activity at their station ahead of your event.</li>
                <li>Have everyone at every station do the Hack Your Name Tag step before you begin.</li>
                <li>Pick a common amount of time you’d like to spend on each activity - Postcrimes, <a href="activity02-meme-around.html">Meme Around</a>, and <a href="activity03-contribute-to-the-commons.html">Contribute to the Commons</a>.</li>
                <li>Adapt each activity to fit your timing.</li>
                <li>Adapt each activity to fit your timing.</li>
                <li>Run the first two rounds of activities, but skip the petition call to action (CTA in their reflections.</li>
                <li>Run the last round and deliver its petition CTA in the reflection.</li>
              </ol>
            </div>
          )
        }}
        steps={[
          {
            title: "Hack Your Nametag",
            duration: "10 minutes",
            contents: (
              <div>
                <p>Welcome attendees and ask them to make name tags.</p>
                
                <p>Each name tag should have:</p>
                
                <ul className="fancy">
                  <li>The attendee’s name and a social media handle (if desired) on one side.</li>
                  <li>A question the attendee has about copyright on the other side.</li>
                </ul>

    <p>Invite participants to illustrate and/or illuminate their name tags with your crafting supplies.</p>

    <p>Once everyone is finished, start a round of introductions so people can share their names and questions.</p>
              </div>
            )
          },
          {
            title: "Introduction to Postcrimes",
            duration: "10 minutes",
            contents: (
              <div>
                <p>Next use the script below to introduce the campaign and today’s activity. Explain that Copyright in Europe is a messy patchwork of laws that :</p>
                
                <ul className="fancy">
                  <li>Changes from country to country.</li>
                  <li>Can limit expression and access to information.</li>
                  <li>Can inhibit innovation and creativity.</li>
                </ul>
                
                <p>Share this example:</p>
                
                <p>For example, some countries limit your <a href="https://en.wikipedia.org/wiki/File:FixCopyright-_Copy_explains_%27Freedom_of_Panorama%27.webm">“freedom of panorama,”</a> which means you can take pictures of some public spaces in some countries and share them online, but not others.</p> 
                
                <p>Share a map like <a href="https://en.wikipedia.org/wiki/Freedom_of_panorama#/media/File:Freedom_of_Panorama_in_Europe_NC.svg">this one</a> or <a href="https://commons.wikimedia.org/wiki/Commons:Freedom_of_panorama#/media/File:Freedom_of_Panorama_world_map.png">this one</a> with your attendees to show just how messy it is when so many different countries treat copyright differently. You can even see an interactive version of how different rules change by country <a href="http://copyrightexceptions.eu/#Art.%205.1">here</a>.</p>
                
                <p>As you show one of the maps, say something like this to your group:</p>
                
                <p>Take a look at this map. Each color represents a different policy about taking pictures. You don’t need to be a copyright expert to see how complex and challenging it is to figure out copyright in the EU.</p>
                
                <p>You also don’t need to be an expert to see that many countries limit creative expression and everyday activities - like taking a photo and sharing it online while on holiday - because of copyright.</p>
                
                <p>There are also just as many policies about sharing content - like links and memes - online. Should remixing or sharing links be a crime?</p>
                
                <p>Thankfully, your personal story and voice give you the power to influence copyright reform.</p>
                
                <p>Today we’re going to share an easy way to make yourself heard as a supporter of common sense copyright across the EU.</p>
                
                <p>To get ready, let’s check out an explainer video from Mozilla.</p>
                
                <p>Choose one (or more) of these videos from our friends at Copyright for Creativity to learn more about EU copyright reform:</p>
                
                <ul className="fancy">              
                  <li>#Fixcopyright: <a href="https://www.youtube.com/watch?v=-CdfIpTiE3g">Robocopyright and 2.0 - the 2016 Copyright Review</a></li>
                  <li><a href="https://www.youtube.com/watch?v=0fdUDecJ6jc">Copy</a> (aka Copyright) tells the story of his life</li>
                  <li>Copy explains <a href="https://www.youtube.com/watch?v=wQWU48uTUd8">Freedom of Panorama</a></li>
                  <li><a href="https://www.youtube.com/watch?v=jiBxdH4MM_0">Meet Ancy</a> (short for Ancillary Copyright)</li>
                </ul>
              </div>
            )
          },
          {
            title: "Postcrimes",
            duration: "20 minutes",
            contents: (
              <div>
                <p>Introduce and demo the “Postcrimes” activity for your group. Say:</p>
                
                <p>To support copyright reform, we’re going to use an activity called “Postcrimes” to,</p>
                
                <ul className="fancy">
                  <li>Sign a petition supporting change.</li>
                  <li>Send a postcard to our local representatives urging them to work for change, as well.</li>
                </ul>
              
                <p>We’re doing this to make sure the EU:</p>
                
                <ul className="fancy">
                  <li><strong>Updates copyright laws for the 21st century</strong> to reflect how we live, work, share, and create online.</li>
                  <li><strong>Builds in openness and flexibility</strong> to foster innovation and creativity .</li>
                  <li><strong>Doesn’t break the internet</strong> through the establishment of gatekeepers, locking down content, or chilling expression, innovation, and the open internet.</li>
                </ul>
                
                <p>Read more here: <a href="https://www.changecopyright.org/">https://www.changecopyright.org</a>.</p> 
                
                <p>We’ll need our computers or phones for this activity. We’re going to:</p>
                
                <ol className="fancy">
                  <li>Create a rebellious, virtual selfie that puts you in front of a popular landmark that is currently not protected through the panorama exception [<strong>Note:</strong> Participation is optional and you’ll remain anonymous to Mozilla unless you identify yourself on the postcard or share it with Mozilla].</li>
                  <li>Send that postcard to your MEP with your message in support of copyright reform.</li>
                  <li>Sign a petition supporting common-sense copyright reform for all of the EU.</li>
                </ol>
                
                <p>Let’s try it out! The link is <a href="https://postcrimes.org">postcrimes.org</a></p>
                
                <p>Demo the <a href="https://postcrimes.org">Postcrimes</a> activity on your computer. Then give participants another 5-10 minutes to send a postcard to your MEP.</p>
              </div>
            )
          },
          {
            title: "Reflection",
            duration: "5 minutes",
            contents: (
              <div>
                <p>Use the rest of your time to help attendees reflect on the activity. Use the prompts or make your own.</p>
                
                <ul className="fancy">
                  
                  <li>What did you think of copyright in the EU before this event? After? What changed? Why did it change for you?</li>
                  <li>How would you describe copyright reform to a friend or family member?</li>
                  <li>What’s difficult about having different copyright laws in each country? How might copyright reform benefit the EU?</li>
                </ul>

			    <p><strong>Up Next</strong> --> <a href="activity02-meme-around.html">Meme Around</a></p>
              </div>
            )
          }
        ]}
      />
    );
  }
});
