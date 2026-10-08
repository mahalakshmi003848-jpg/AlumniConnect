import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Clock3,
  Users,
  Search,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import "./Events.css";

const events = [
  {
    id: 1,
    day: "18",
    month: "OCT",
    title: "Alumni Connect 2026",
    description:
      "An evening of conversations, networking and meaningful connections across generations.",
    location: "Reva University",
    time: "5:00 PM – 8:00 PM",
    category: "Networking",
    attendees: "320+",
    host: "Alumni Relations Office",
  },
  {
    id: 2,
    day: "24",
    month: "OCT",
    title: "Tech Leaders Roundtable",
    description:
      "Industry leaders share what is changing across technology, AI and the future of work.",
    location: "Bengaluru",
    time: "10:00 AM – 1:00 PM",
    category: "Technology",
    attendees: "180+",
    host: "AlumniConnect",
  },
  {
    id: 3,
    day: "02",
    month: "NOV",
    title: "Career Stories: From Campus to Industry",
    description:
      "Real career journeys from alumni who turned their first opportunity into something bigger.",
    location: "Virtual Event",
    time: "6:00 PM – 7:30 PM",
    category: "Career",
    attendees: "500+",
    host: "Career Development Cell",
  },
  {
    id: 4,
    day: "15",
    month: "NOV",
    title: "Startup & Founders Meet",
    description:
      "Connect with alumni founders, entrepreneurs and aspiring builders.",
    location: "Bengaluru",
    time: "4:00 PM – 7:00 PM",
    category: "Entrepreneurship",
    attendees: "140+",
    host: "AlumniConnect",
  },
];

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [registered, setRegistered] = useState([]);

  const categories = [
    "All",
    "Networking",
    "Technology",
    "Career",
    "Entrepreneurship",
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  const toggleRegistration = (id) => {
    setRegistered((current) =>
      current.includes(id)
        ? current.filter((eventId) => eventId !== id)
        : [...current, id]
    );
  };

  return (
    <div className="events-page">
      <Navbar />

      {/* HERO */}
      <section className="events-premium-hero">
        <div className="events-hero-inner">
          <div className="events-hero-copy">
            <span className="events-kicker">
              <i></i>
              ALUMNI EVENTS
            </span>

            <h1>
              Meet beyond
              <br />
              the screen.
              <br />
              <em>Be part of it.</em>
            </h1>

            <p>
              From reunions and networking evenings to industry conversations
              and career events — discover the moments that bring your alumni
              community together.
            </p>

            <div className="events-hero-actions">
              <a href="#events" className="events-dark-button">
                Explore events
                <ArrowRight size={17} />
              </a>

              <a href="#host" className="events-text-button">
                Host an event
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="events-hero-visual">
            <div className="events-visual-label">
              <span>UPCOMING</span>
              <strong>100+ events</strong>
            </div>

            <div className="event-calendar">
              <div className="calendar-top">
                <span>OCTOBER</span>
                <strong>2026</strong>
              </div>

              <div className="calendar-week">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>

              <div className="calendar-days">
                {[
                  "", "", "", "", "1", "2", "3",
                  "4", "5", "6", "7", "8", "9", "10",
                  "11", "12", "13", "14", "15", "16", "17",
                  "18", "19", "20", "21", "22", "23", "24",
                  "25", "26", "27", "28", "29", "30", "31",
                ].map((day, index) => (
                  <span
                    key={`${day}-${index}`}
                    className={
                      day === "18"
                        ? "selected"
                        : day === "24"
                        ? "has-event"
                        : ""
                    }
                  >
                    {day}
                  </span>
                ))}
              </div>

              <div className="calendar-event">
                <div className="calendar-event-date">
                  <strong>18</strong>
                  <span>OCT</span>
                </div>

                <div>
                  <strong>Alumni Connect 2026</strong>
                  <span>5:00 PM · Reva University</span>
                </div>
              </div>
            </div>

            <div className="event-floating-card event-float-one">
              <div className="mini-date">
                <strong>24</strong>
                <span>OCT</span>
              </div>

              <div>
                <strong>Tech Leaders</strong>
                <span>180+ attending</span>
              </div>
            </div>

            <div className="event-floating-card event-float-two">
              <Users size={15} />
              <div>
                <strong>320+</strong>
                <span>already registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="events-stats">
        <div className="events-stats-inner">
          <div>
            <strong>100+</strong>
            <span>Annual Events</span>
          </div>

          <div>
            <strong>5K+</strong>
            <span>Event Attendees</span>
          </div>

          <div>
            <strong>25+</strong>
            <span>Industry Sessions</span>
          </div>

          <div>
            <strong>18</strong>
            <span>Career Domains</span>
          </div>
        </div>
      </section>

      {/* EVENT DIRECTORY */}
      <section className="events-directory" id="events">
        <div className="events-directory-inner">
          <div className="events-heading">
            <div>
              <span className="events-section-kicker">
                WHAT'S HAPPENING
              </span>

              <h2>
                Make time for
                <br />
                <em>something meaningful.</em>
              </h2>
            </div>

            <p>
              Find conversations, reunions and experiences worth showing up
              for — online or in person.
            </p>
          </div>

          <div className="events-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search events, locations or topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <span>⌘ K</span>
          </div>

          <div className="events-category-row">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="events-result-header">
            <span>{filteredEvents.length} events</span>
            <span>UPCOMING</span>
          </div>

          <div className="events-list">
            {filteredEvents.map((event) => {
              const isRegistered = registered.includes(event.id);

              return (
                <article className="premium-event" key={event.id}>
                  <div className="event-date-large">
                    <strong>{event.day}</strong>
                    <span>{event.month}</span>
                  </div>

                  <div className="event-main">
                    <div className="event-title-row">
                      <h3>{event.title}</h3>

                      <span className="event-category">
                        {event.category}
                      </span>
                    </div>

                    <p>{event.description}</p>

                    <div className="event-meta">
                      <span>
                        <MapPin size={11} />
                        {event.location}
                      </span>

                      <span>
                        <Clock3 size={11} />
                        {event.time}
                      </span>

                      <span>
                        <Users size={11} />
                        {event.attendees} attending
                      </span>
                    </div>

                    <div className="event-host">
                      Hosted by <strong>{event.host}</strong>
                    </div>
                  </div>

                  <div className="event-action">
                    <button
                      className={isRegistered ? "registered" : ""}
                      onClick={() => toggleRegistration(event.id)}
                    >
                      {isRegistered ? (
                        <>
                          <CheckCircle2 size={14} />
                          Registered
                        </>
                      ) : (
                        <>
                          Register
                          <ArrowUpRight size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}

            {filteredEvents.length === 0 && (
              <div className="events-empty">
                <CalendarDays size={26} />
                <h3>No events found</h3>
                <p>Try another search or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="events-feature">
        <div className="events-feature-inner">
          <div className="events-feature-copy">
            <span className="events-section-kicker">
              MORE THAN AN EVENT
            </span>

            <h2>
              One evening.
              <br />
              One conversation.
              <br />
              <em>One new connection.</em>
            </h2>

            <p>
              The best part of an alumni event isn't always what's on the
              schedule. It's the person you meet, the story you hear and the
              conversation that continues long after the event ends.
            </p>

            <a href="#events">
              Discover upcoming events
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="event-ticket">
            <div className="ticket-top">
              <span>ALUMNI CONNECT</span>
              <strong>EVENT PASS</strong>
            </div>

            <div className="ticket-date">
              <strong>18</strong>
              <div>
                <span>OCTOBER</span>
                <b>2026</b>
              </div>
            </div>

            <div className="ticket-title">
              <span>FEATURED EVENT</span>
              <h3>Alumni Connect 2026</h3>
            </div>

            <div className="ticket-details">
              <div>
                <MapPin size={13} />
                <span>Reva University</span>
              </div>

              <div>
                <Clock3 size={13} />
                <span>5:00 PM – 8:00 PM</span>
              </div>
            </div>

            <div className="ticket-bottom">
              <span>320+ alumni attending</span>
              <button>View event <ArrowUpRight size={13} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* HOST CTA */}
      <section className="host-event" id="host">
        <div className="host-event-inner">
          <div>
            <span className="events-section-kicker">FOR ALUMNI & INSTITUTIONS</span>

            <h2>
              Have an idea
              <br />
              worth bringing
              <br />
              <em>people together for?</em>
            </h2>
          </div>

          <div className="host-event-copy">
            <p>
              Host a reunion, workshop, networking session or industry
              conversation and bring your alumni community closer together.
            </p>

            <button>
              Host an event
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <footer className="events-footer">
        <div className="events-footer-brand">
          <div>A</div>
          <span>AlumniConnect</span>
        </div>

        <span>EVENTS · COMMUNITY · CONNECTION</span>
      </footer>
    </div>
  );
}

export default Events;