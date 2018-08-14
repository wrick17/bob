import React from 'react';
import { zeropad, timeConvert, monthNames } from '../utils';
import Button from './button';

const Table = ({ links }) => {
  if (!links || !links.length) {
    return null;
  }
  return (
    <div>
      <ul>
        {
          links.map(link => {
            const date = new Date(link.date.datetime);
            const day = date.getDate();
            const month = monthNames[date.getMonth()].slice(0, 3);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return (
              <li key={link.id} className="event">
                <div className="left">
                  <div className="date">{day}</div>
                  <div className="month">{month}</div>
                  <div className="time">{timeConvert(`${zeropad(hours)}:${zeropad(minutes)}`)}</div>
                </div>
                <div className="middle">
                  <div className="name">{link.text.name}</div>
                  <div className="location">{`${link.venue.text.name}, ${link.city.text.name}, ${link.country.alphaCode}`}</div>
                </div>
                <div className="right">
                  <a href={`https://www.venuenetwork.net/tickets/${link.id}/`} target="_blank" >
                    <Button label="Buy Tickets" />
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
      <style jsx>{`
      ul {
        padding-left: 0;
        border: 1px solid #DDD;
        margin-top: 20px;
      }
      .event {
        list-style: none;
        display: flex;
        width: 100%;
        padding: 15px 15px 15px 0;
        border-bottom: 1px solid #DDD;
        align-items: center;
      }
      .event:last-child {
        border-bottom: none;
      }
      .left {
        flex: 0 0 100px;
        text-align: center;
      }
      .middle {
        flex: 1;
      }
      .right {
        flex: 0 0 140px;
      }
      .date {
        color: red;
        font-size: 22px;
        font-weight: bold;
      }
      .month {
        font-weight: bold;
        text-transform: uppercase;
        color: #333;
        font-size: 14px;
      }
      .time {
        font-size: 12px;
        color: #333;
        font-weight: bold;
      }
      .name {
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .location {
        color: #777;
        font-size: 16px;
      }
    `}</style>
    </div>
  )
};

export default Table;