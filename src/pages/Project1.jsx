import React from 'react'
import {
  Problem,
  Research,
  Insights,
  Concept,
  Design,
  Testing,
  Future,
} from './Content1'
import './content.css'

function Project1() {
  return (
    <div>
      <div className='content__header'>
        <h1 className='page__title'>Spotify Desktop Redesign</h1>
      </div>
      <div>
        <section>
          <p>History</p>
          <p>The challenge</p>
          <p>The outcome</p>
          <p>Deliverables</p>
        </section>
      </div>
      <div>
        <Problem />
        <Research />
        <Insights />
        <Concept />
        <Design />
        <Testing />
        <Future />
        <section>
          <p>Thank you to the team members who made this possible!</p>
        </section>
      </div>
    </div>
  )
}

export default Project1
