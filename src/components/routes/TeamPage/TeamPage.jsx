import React from 'react'
import '../TeamPage/teamPage.scss'
const TeamPage = () => {

  return (
    <div className="all">
      <span className="meet">Meet The Team</span>
      <div className="nat">
        <div className="inner">
            <h4>Natasha Coen</h4>
            <span className="resume">
              Natasha is a junior software developer with a background in QA and the beer industry. In honing her craft to build 
              efficient and concise software, Natasha strives to create applications
              that are fun, stylish, and easy to navigate for computer users of all levels. In creating Betrippin,
              Natasha contributed to the overall design layout and user stories with her teammates, and built the packing list and countdown timer components in React.
              Beyond creating service-oriented applications, she enjoys playing the uke, beer-brewing, cooking an [array] of dishes, and listening to her hubby’s vinyl collection.
              </span>
        </div>
      </div><div className="antwain">
        <div className="inner">
          <h4>Antwain Hart</h4>
          <span className="resume">Im a software developer who specializes
          in web design, front-end development as well as user experiences.
          My tenure in the entertainment field working with a number of different
          companies in multiple industries has fortified my skills in curating their
          visual ideas and concepts into a way that consumers can find relatable and
          digest. In the future I plan to continue to be the link between fresh new
                 ideas and innovative solutions. </span>
        </div>
      </div><div className="jen">
        <div className="inner">
          <h4>Zhijie (Jenny) Xu</h4>
          <span className="resume">Im a software developer who specializes
          in web design, front-end development as well as user experiences.
          My tenure in the entertainment field working with a number of different
          companies in multiple industries has fortified my skills in curating their
          visual ideas and concepts into a way that consumers can find relatable and
          digest. In the future I plan to continue to be the link between fresh new
                 ideas and innovative solutions. </span>
        </div>
      </div><div className="ben">
        <div className="inner">
          <h4>Ben Lewin</h4>
          <span className="resume">Ben is a software engineer in the Greater Boston area
          who enjoys solving complex puzzles in React and other languages.  When he’s not
          coding, he can usually be found singing with his barbershop quartets: Daily Special
          and Tomato Staccato, or his chorus: Vocal Revolution. </span>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
