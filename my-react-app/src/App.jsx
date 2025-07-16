import React, { useEffect, useState } from 'react';

export default function App() {
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch title
    fetch('http://localhost:3001/title')
      .then(res => res.json())
      .then(data => setTitle(data));

    // Fetch bio
    fetch('http://localhost:3001/bio')
      .then(res => res.json())
      .then(data => setBio(data));

    // Fetch projects
    fetch('http://localhost:3001/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div style={{paddingLeft:"50%", display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:"center"  , maxWidth: '100%', fontFamily: 'Arial, sans-serif' }}>
     <div>

      <header style={{ borderBottom: '2px solid #eee', marginBottom: '2rem' }}>
        <h1>{title}</h1>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2>About Me</h2>
        <p>{bio}</p>
      </section>

      <section>
        <h2>Projects</h2>
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {projects.map(project => (
              <li key={project.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
        </div>
    </div>
  );
}
