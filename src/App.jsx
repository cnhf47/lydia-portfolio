import './styles/base.css'
import './styles/home.css'
import './styles/project.css'
import './styles/durham.css'
import './styles/procedural.css'
import './styles/about.css'
import './styles/contact.css'
import './styles/responsive.css'

import { useEffect, useRef, useState } from 'react'
import { HashRouter, Routes, Route, Link, useParams } from 'react-router'

import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import ProjectCard from './components/ProjectCard'
import ImageCarousel from './components/ImageCarousel'
import MachinationsSection from './components/MachinationsSection'

// Durham Market Festival images
import unityScreenshot from './assets/images/durham-market.png'
import difficultyImage from './assets/images/difficulty-ui.png'
import gameplayImage from './assets/images/durham-market5.png'
import progressionImage from './assets/images/durham-market4.png'
import sceneImage from './assets/images/durham-market3.png'
import endingScreenImage from './assets/images/ending-screen.png'
import musicLoverImage from './assets/images/music-lover-model.png'
import foodieImage from './assets/images/foodie-model.png'
import machinations1 from './assets/images/machinations1.png'
import machinations2 from './assets/images/machinations2.png'

// Procedural Map Generation images 
import mapScreenshot from './assets/images/procedural-map.png'
import grasslandMapImage from './assets/images/Grassland.png'
import grasslandMapImage2 from './assets/images/Grassland2.png'
import dungeonMapImage from './assets/images/Dungeon_cave.png'
import dungeonMapImage2 from './assets/images/Dungeon_cave2.png'
import underwaterMapImage from './assets/images/Underwater_cave.png'
import underwaterMapImage2 from './assets/images/Underwater_cave2.png'
import evaluationOverviewImage from './assets/images/test.png'
import surfaceWaterMapImage from './assets/images/surface-water-map.png'
import blockedPassageGameplayImage from './assets/images/Block1.png'
import blockedPassageTileImage from './assets/images/Block2.png'

const durhamGallery = [
  {
    src: difficultyImage,
    alt: 'Difficulty selection interface in Durham Market Festival',
    title: 'Difficulty Selection',
    description: 'The introductory screen explains the game objectives and allows players to choose Easy, Normal or Hard.'
  },
  {
    src: gameplayImage,
    alt: 'Durham Market Festival main gameplay',
    title: 'Main Gameplay',
    description: 'The gameplay interface displays queues, facility upgrades, revenue, happiness and a crowd-density heatmap.'
  },
  {
    src: progressionImage,
    alt: 'Later gameplay with upgraded facilities and increased visitor activity',
    title: 'Gameplay Progression',
    description: 'A later stage showing how facility upgrades and increased visitor activity change the simulation.'
  },
  {
    src: endingScreenImage,
    alt: 'End screen showing final rank, happiness gained and happiness lost',
    title: 'End Screen & Results',
    description: 'The end screen presents the player’s rank and performance summary, including happiness gained, happiness lost and loss percentage.'
  },
  {
    src: sceneImage,
    alt: 'Unity editor scene showing visitors and facilities',
    title: 'Behind the Scenes — Unity',
    description: 'An overview of the Unity environment and the arrangement of facilities and visitor objects.'
  }
]

const visitorModels = [
  {
    src: musicLoverImage,
    alt: 'Music Lover visitor model built using Unity primitives',
    name: 'Music Lover',
    description: 'A visitor type interested in the concert attraction.'
  },
  {
    src: foodieImage,
    alt: 'Foodie visitor model built using Unity primitives',
    name: 'Foodie',
    description: 'A visitor type interested in the food stalls.'
  }
]

const machinationsDiagrams = [
  {
    title: 'Economy & Feedback Systems',
    image: machinations1,
    alt: 'Machinations diagram of visitor arrivals, facility upgrades, queues, revenue and happiness',
    description: 'This diagram models the relationships between visitor arrivals, facility upgrades, queue capacity, revenue and satisfaction. It explores positive progression loops and the risk of overcrowding.',
    link: 'https://machinations.io/community/diagrams/0f71a4b5da2c11f0838a0abc5ce0dcc9'
  },
  {
    title: 'Visitor Behaviour & Autonomous Interactions',
    image: machinations2,
    alt: 'Machinations diagram of grouped and individual visitors, destinations, queues and happiness',
    description: 'This diagram models visitor interests, group movement, destination selection and the effects of queues on happiness.',
    link: 'https://machinations.io/community/diagrams/34d911e9da0c11f0838a0abc5ce0dcc9'
  }
]

const proceduralMapSamples = [
  {
    title: 'Grassland Generation',
    algorithm: 'Constrained Probabilistic Placement',
    images: [
      { src: grasslandMapImage, alt: 'First generated grassland with trees, grass clusters and reserved exit area' },
      { src: grasslandMapImage2, alt: 'Second generated grassland with different vegetation and obstacle placement' }
    ],
    description: 'The grassland generator uses constrained random placement for trees, brush and decorations. Encounter grass is generated in radius-based clusters with softened edges. The spawn and exit areas are protected so random placement does not obstruct important gameplay spaces.'
  },
  {
    title: 'Dungeon Generation',
    algorithm: 'Binary Space Partitioning (BSP)',
    images: [
      { src: dungeonMapImage, alt: 'First BSP dungeon with rooms, corridors and an exit area' },
      { src: dungeonMapImage2, alt: 'Second BSP dungeon showing a different room and corridor arrangement' }
    ],
    description: 'The dungeon generator recursively partitions the map and creates rooms connected by L-shaped corridors. Fixed starting and exit rooms, wall autotiling and obstacle-placement constraints support playability while still allowing layouts to vary.'
  },
  {
    title: 'Underwater Cave Generation',
    algorithm: 'Cellular Automata (CA)',
    images: [
      { src: underwaterMapImage, alt: 'First Cellular Automata underwater cave with organic passages and seagrass' },
      { src: underwaterMapImage2, alt: 'Second underwater cave with a different arrangement of cave regions and passages' }
    ],
    description: 'The underwater generator uses Cellular Automata to form irregular cave layouts, then applies flood-fill region detection, tunnel carving, passage widening and connectivity repair. The resulting underwater cave must remain navigable after wall decoration is added.'
  }
]

const projects = [
  {
    id: 1,
    slug: 'durham-market',
    title: 'Durham Market Festival',
    genre: 'Management · Simulation',
    projectStage: 'UNITY GAME PROTOTYPE',
    type: 'Unity · C# · Game Development',
    image: unityScreenshot,
    imageAlt: 'Gameplay screenshot of Durham Market Festival',
    youtubeId: '8GQ-nEJpIR8',
    gallery: durhamGallery,
    models: visitorModels,
    machinations: machinationsDiagrams,
    description: 'A strategic management game set at Durham Market. Players manage facilities, visitor happiness, queues and resources to improve the event experience.',
    role: 'Individual coursework project. I designed and implemented the gameplay systems and interface.',
    skills: ['Unity', 'C#', 'Game Systems Design', 'Game Playtesting', 'Machinations'],
    skillCategories: [
      {
        title: 'Game Development & Programming',
        skills: ['Unity', 'C#', 'Gameplay Programming', '3D Character Prototyping']
      },
      {
        title: 'Game Systems & Design',
        skills: ['Game Systems Design', 'Machinations', 'Resource Management Systems', 'Economy & Upgrade Mechanics', 'Gameplay Balancing', 'Difficulty Scaling System']
      },
      {
        title: 'Visitor Simulation & AI',
        skills: ['Autonomous Visitor Behaviour', 'Unity NavMesh Pathfinding']
      },
      {
        title: 'QA, UI & Accessibility',
        skills: ['Game Playtesting', 'Debugging', 'UI/UX Design', 'Accessibility Features', 'Data Visualisation']
      }
    ],
    development: [
      'Created autonomous visitors with different interests and group behaviour.',
      'Implemented facility upgrades, queue management and visitor satisfaction systems.',
      'Designed economic feedback loops connecting happiness, visitor arrivals and revenue.',
      'Built a crowd-density heatmap and live game statistics interface.',
      'Added adjustable text sizes and difficulty settings.'
    ],
    testing: [
      {
        name: 'Gameplay Balancing',
        approach: 'Playtested how facility upgrades affected visitor flow, queue pressure and satisfaction.',
        finding: 'The interconnected systems created management decisions, but visitor behaviour needed more variation.'
      },
      {
        name: 'Visitor Behaviour',
        approach: 'Observed autonomous visitors navigating the environment and interacting with service queues.',
        finding: 'The prototype demonstrated autonomous crowd behaviour, with opportunities to improve variation.'
      },
      {
        name: 'UI and Accessibility',
        approach: 'Evaluated how the heatmap, live statistics and adjustable text size supported player understanding.',
        finding: 'The visualisations helped communicate congestion and game state to the player.'
      }
    ],
    outcome: 'Developed a playable management-game prototype combining autonomous visitors, facility upgrades, an economy and game-state visualisations.',
    nextStep: 'Expand visitor behaviour variety, refine balancing and improve the clarity of gameplay feedback.'
  },
  {
    id: 2,
    slug: 'procedural-generation',
    title: 'Pokémon-Style RPG Map Lab',
    genre: 'Procedural Generation · RPG',
    projectStage: 'FINAL YEAR PROJECT',
    type: 'Ruby · RPG Maker XP · Final Year Project',
    image: mapScreenshot,
    imageAlt: 'Procedurally generated game map',
    coverVideoId: 'zSLRK6z3OF8',
    walkthroughVideoId: 'Edy0oQPYsCA',
    mapSamples: proceduralMapSamples,
    evaluationImage: evaluationOverviewImage,
    surfaceWaterImage: surfaceWaterMapImage,
    blockedPassageImages: [blockedPassageGameplayImage, blockedPassageTileImage],
    description: 'For my final-year project, I built three procedural map generators in RPG Maker XP and Pokémon Essentials, creating varied grassland, dungeon and underwater environments while keeping maps playable and compatible with existing game systems.',
    role: 'Independently designed, implemented and evaluated three procedural map generators, including connectivity improvements, debugging and inspection tools, and compatibility testing.',
    skills: ['Ruby', 'Procedural Generation', 'Algorithms', 'Manual Playtesting', 'Debugging'],
    skillCategories: [
      {
        title: 'Development & Tools',
        skills: ['Ruby', 'RPG Maker XP', 'Pokémon Essentials']
      },
      {
        title: 'Procedural Generation & Algorithms',
        skills: ['Procedural Content Generation', 'Binary Space Partitioning (BSP)', 'Cellular Automata', 'Constrained Probabilistic Placement', 'Algorithm Implementation']
      },
      {
        title: 'Map Systems & Debugging',
        skills: ['Map Connectivity Repair', 'Passage Generation & Widening', 'Protected Player Spawn Areas', 'Full-Map Rendering', 'Tile-ID Debugging']
      },
      {
        title: 'Quality Assurance & Evaluation',
        skills: ['Manual Playtesting', 'Connectivity & Reachability Testing', 'Visual Map Inspection', 'NPC & Event Compatibility Testing', 'Test Results Documentation']
      }
    ],
    development: [
      'Implemented three Ruby generation modules: constrained probabilistic placement, Binary Space Partitioning and Cellular Automata.',
      'Protected gameplay-critical areas such as spawn points, exit paths and dive rooms from random placement.',
      'Added corridor carving, procedural wall autotiling, passage widening and post-decoration connectivity repair.',
      'Integrated runtime tile updates, .rxdata persistence and visual refreshes into RPG Maker XP.',
      'Created full-map inspection and tile debugging tools to support development and evaluation.',
      'Tested compatibility with existing Pokémon Essentials NPC and event interactions.'
    ],
    testing: [
      {
        name: 'Grassland Testing',
        approach: 'Generated ten maps and checked visual quality, reserved areas, obstacle placement and start-to-exit reachability.',
        finding: '10/10 maps passed the recorded visual-quality and playability checks.'
      },
      {
        name: 'Dungeon Connectivity Testing',
        approach: 'Generated ten dungeons and tested wall autotiling, route reachability and access to optional rooms.',
        finding: '10/10 had reachable exits. All-room reachability passed in 9/10 because one optional room was isolated.'
      },
      {
        name: 'Water & Underwater Testing',
        approach: 'Generated ten paired environments and tested matching dive points, cave regions and passability after decoration.',
        finding: '10/10 passed the recorded visual-quality and playability checks.'
      },
      {
        name: 'NPC & Event Compatibility',
        approach: 'Manually tested dialogue, item giving, path blocking, choice branching, teleportation and NPC movement routes.',
        finding: 'All recorded NPC and event interactions functioned as expected on the tested maps.'
      }
    ],
    outcome: 'Built three working procedural map generators and tested 30 generated maps. The results showed that the maps could be generated and explored in RPG Maker XP, while testing also revealed an isolated optional dungeon room that needs further improvement.',
    nextStep: 'Increase the evaluation sample size and automate reachability checks; add stronger all-room connectivity validation for BSP dungeons; improve the map-display workflow and investigate procedural NPC placement.'
  }
]

// Shared UI pieces ---------------------------------------------------------

function YouTubeVideo({ videoId, title, description, note }) {
  return (
    <section className="detail-section">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div className="video-container">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {note && <p className="video-note"><strong>Known limitation:</strong> {note}</p>}
      <p className="video-description">
        <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
          Watch on YouTube ↗
        </a>
      </p>
    </section>
  )
}

function SkillsSection({ project }) {
  return (
    <section className="detail-section">
      <h2>Tools & Skills</h2>
      {project.skillCategories ? (
        <div className="project-skill-categories">
          {project.skillCategories.map((category) => (
            <article className="project-skill-category" key={category.title}>
              <h3>{category.title}</h3>
              <div className="skills">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="skills">
          {project.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
        </div>
      )}
    </section>
  )
}

function DevelopmentSection({ project }) {
  return (
    <section className="detail-section">
      <h2>Development & Implementation</h2>
      <ul>{project.development.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  )
}

function TestingCards({ project }) {
  return (
    <div className="qa-grid">
      {project.testing.map((test) => (
        <article className="qa-card" key={test.name}>
          <h3>{test.name}</h3>
          <p><strong>Approach:</strong> {test.approach}</p>
          <p><strong>Finding:</strong> {test.finding}</p>
        </article>
      ))}
    </div>
  )
}

function ContributionAndSkills({ project }) {
  return (
    <>
      <section className="detail-section">
        <h2>My Contribution</h2>
        <p>{project.role}</p>
      </section>
      <SkillsSection project={project} />
    </>
  )
}

function Outcomes({ project }) {
  return (
    <>
      <section className="detail-section">
        <h2>Project Outcome</h2>
        <p>{project.outcome}</p>
      </section>
      <section className="detail-section">
        <h2>Future Improvements</h2>
        <p>{project.nextStep}</p>
      </section>
    </>
  )
}

// Durham Market Festival --------------------------------------------------

function DurhamMarketContent({ project }) {
  return (
    <>
      <section className="detail-section">
        <h2>Project Overview</h2>
        <p>{project.description}</p>
      </section>

      {project.youtubeId && (
        <YouTubeVideo
          videoId={project.youtubeId}
          title="Gameplay Demonstration"
          description="A demonstration of visitor behaviour, facility upgrades, queue management, statistics and crowd visualisation."
        />
      )}

      <section className="detail-section">
        <h2>Gameplay & Development Gallery</h2>
        <ImageCarousel key={project.slug} images={project.gallery} />
      </section>

      <section className="detail-section">
        <h2>Visitor Character Models</h2>
        <p>These visitor models were created using Unity primitives to represent different interests in the simulation.</p>
        <div className="visitor-model-grid">
          {project.models.map((model) => (
            <figure className="visitor-model-card" key={model.name}>
              <img src={model.src} alt={model.alt} loading="lazy" />
              <figcaption><h3>{model.name}</h3><p>{model.description}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ContributionAndSkills project={project} />
      <DevelopmentSection project={project} />
      <MachinationsSection diagrams={project.machinations} />
      <section className="detail-section">
        <h2>Testing & Quality Assurance</h2>
        <TestingCards project={project} />
      </section>
      <Outcomes project={project} />
    </>
  )
}

// Procedural Map Generation -----------------------------------------------

function ProceduralMapSamples({ samples }) {
  return (
    <section className="detail-section" aria-labelledby="pcg-generated-maps-heading">
      <h2 id="pcg-generated-maps-heading">Generated Map Samples</h2>
      <p>Two outputs for each algorithm, generated using the same parameters to show how layouts vary between runs.</p>
      {samples.map((sample) => (
        <section className="generated-map-section pcg-biome-section" key={sample.title}>
          <h3>{sample.title}</h3>
          <p className="generated-map-algorithm">Algorithm: {sample.algorithm}</p>
          <div className="generated-map-grid">
            {sample.images.map((image, index) => (
              <figure className="generated-map-card" key={image.src}>
                <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size ${sample.title} sample ${index + 1}`}>
                  <img src={image.src} alt={image.alt} className="generated-map-image" loading="lazy" />
                </a>
                <figcaption>Generated Sample {index + 1}</figcaption>
              </figure>
            ))}
          </div>
          <p className="generated-map-description">{sample.description}</p>
        </section>
      ))}
    </section>
  )
}

function SurfaceAndDiveSection({ image }) {
  return (
    <section className="detail-section pcg-feature-section">
      <h2>Surface-Water & Underwater Map Coordination</h2>
      <p>
        The water generator coordinates two linked maps: a surface-water environment and a separately generated
        underwater cave. Two fixed deep-water dive points on the surface must align with accessible rooms at the
        same coordinates underwater. Rock obstacles restrict direct surface access to one dive point, encouraging
        the player to navigate the underwater environment.
      </p>
      <figure className="pcg-figure pcg-figure-narrow">
        <a href={image} target="_blank" rel="noopener noreferrer" aria-label="View full-size surface-water map">
          <img src={image} alt="Surface-water map with tree border, two deep-water dive patches and rock obstacles" loading="lazy" />
        </a>
        <figcaption>Surface-water map with two dive points corresponding to the generated underwater cave.</figcaption>
      </figure>
      <p className="pcg-muted">The surface-water layout uses fixed key positions; the underwater cave varies between generation runs.</p>
    </section>
  )
}

const architectureSteps = [
  { heading: 'Player enters a map', detail: 'An RPG Maker XP Autorun event starts generation.' },
  { heading: 'Ruby generator runs', detail: 'GrassMapGen, DungeonCaveGen or WaterMapGenCA builds the map.' },
  { heading: 'Tile data is updated', detail: 'The generator writes tile IDs into map.data[x, y, z].' },
  { heading: 'Map is saved', detail: 'The modified map persists to the relevant .rxdata file.' },
  { heading: 'In-game view is refreshed', detail: 'The updated tilemap is rebuilt so the player sees the new environment.' }
]

function ArchitectureSection() {
  return (
    <section className="detail-section">
      <h2>How the System Works</h2>
      <p>
        All three generators use a shared runtime pipeline. The main implementation challenge was adapting
        established procedural generation methods to RPG Maker XP’s existing data model and gameplay constraints.
      </p>
      <ol className="pcg-pipeline">
        {architectureSteps.map((step) => (
          <li key={step.heading}>
            <strong>{step.heading}</strong>
            <span>{step.detail}</span>
          </li>
        ))}
      </ol>
      <div className="pcg-tech-note">
        <h3>Tile layers and passability</h3>
        <p>
          RPG Maker XP stores map tiles in three layers: <code>z = 0</code> for ground,
          <code> z = 1</code> for objects and walls, and <code>z = 2</code> for overlays.
          Generating a playable map required preserving passability, event positions and important travel routes
          across these layers.
        </p>
        <p>
          Generated layouts are visible immediately in-game. The RPG Maker XP editor, however, must be closed
          and reopened to display the new map data saved on disk; this is a limitation of the editor inspection workflow.
        </p>
      </div>
    </section>
  )
}

function TechnicalChallenges({ blockedImages }) {
  return (
    <section className="detail-section">
      <h2>Technical Challenges & Solutions</h2>
      <p>Three examples of problems I identified through development and testing, and the changes I made in response.</p>
      <div className="pcg-challenge-list">
        <article className="pcg-challenge-card">
          <h3>1. Underwater passages blocked by wall decoration</h3>
          <p><strong>Problem:</strong> Connected floor tiles on the ground layer could become impassable after wall decorations were placed on the object layer.</p>
          <p><strong>Solution:</strong> Added corridor pre-widening, simulated wall passability and performed post-decoration flood-fill checks with connectivity repair.</p>
          <p><strong>Result:</strong> The tested underwater layouts retained access between their dive rooms and intended cave regions.</p>
          <div className="pcg-blocked-comparison">
            <figure className="pcg-figure">
              <a href={blockedImages[0]} target="_blank" rel="noopener noreferrer" aria-label="Open in-game blocked-passage screenshot">
                <img src={blockedImages[0]} alt="Player standing at a narrow underwater passage obstructed by wall decorations" loading="lazy" />
              </a>
              <figcaption><strong>In-game view:</strong> The player cannot pass through the narrow corridor.</figcaption>
            </figure>
            <figure className="pcg-figure">
              <a href={blockedImages[1]} target="_blank" rel="noopener noreferrer" aria-label="Open blocked-passage tile-layout screenshot">
                <img src={blockedImages[1]} alt="Tile-grid view illustrating wall decoration tiles blocking the underlying floor route" loading="lazy" />
              </a>
              <figcaption><strong>Tile-layer view:</strong> Impassable wall tiles obstruct the connected ground-level path.</figcaption>
            </figure>
          </div>
        </article>
        <article className="pcg-challenge-card">
          <h3>2. Predictable BSP dungeon corridors</h3>
          <p><strong>Problem:</strong> An early corridor strategy tended to create overly regular or predictable paths.</p>
          <p><strong>Solution:</strong> Connected sibling BSP partition centres using L-shaped corridors, producing more varied junctions and routes while preserving the required path.</p>
        </article>
        <article className="pcg-challenge-card">
          <h3>3. Scattered encounter grass</h3>
          <p><strong>Problem:</strong> Independent per-tile placement made grass patches look fragmented and unnatural.</p>
          <p><strong>Solution:</strong> Replaced this with radius-based clusters with softened edges while keeping spawn points, exits and other reserved areas protected.</p>
        </article>
      </div>
    </section>
  )
}

function ProceduralEvaluation({ project }) {
  return (
    <section className="detail-section">
      <h2>Testing & Evaluation — 30 Generated Maps</h2>
      <p>
        I generated ten maps per algorithm using the same parameter settings, inspected each output with the
        full-map renderer and manually tested playability and framework compatibility.
      </p>
      <div className="pcg-stats-grid">
        <div><strong>3</strong><span>Generation methods</span></div>
        <div><strong>30</strong><span>Maps evaluated</span></div>
        <div><strong>10/10</strong><span>Dungeon exits reachable</span></div>
      </div>
      <div className="pcg-table-scroll">
        <table className="pcg-results-table">
          <thead><tr><th>Generator</th><th>Visual quality</th><th>Playability</th></tr></thead>
          <tbody>
            <tr><td>Grassland</td><td>10/10</td><td>10/10</td></tr>
            <tr><td>Dungeon cave</td><td>10/10</td><td>9/10</td></tr>
            <tr><td>Water & underwater</td><td>10/10</td><td>10/10</td></tr>
          </tbody>
        </table>
      </div>
      <p className="pcg-muted">
        The dungeon’s main start-to-exit path was reachable in all ten runs. One run contained an isolated
        optional room, causing its overall playability evaluation to be 9/10.
      </p>
      <figure className="pcg-figure">
        <a href={project.evaluationImage} target="_blank" rel="noopener noreferrer" aria-label="View overview of thirty generated map samples">
          <img src={project.evaluationImage} alt="Overview screenshot containing ten dungeon, ten grassland and ten underwater map samples" loading="lazy" />
        </a>
        <figcaption>Ten outputs from each of the three generation methods. Click to inspect the full-sized image.</figcaption>
      </figure>
      <h3 className="pcg-subheading">Test Cases & Findings</h3>
      <TestingCards project={project} />
      <p className="pcg-muted">
        Evaluation limits: ten runs per generator provided useful initial results but cannot establish
        reliability across all possible random seeds. Visual-quality assessments also involved subjective judgement.
      </p>
    </section>
  )
}

function ProceduralCredits() {
  return (
    <section className="detail-section">
      <h2>Technology & Asset Credits</h2>
      <p>
        Developed in RPG Maker XP using the Pokémon Essentials framework. RPG Maker XP supplied the map editor
        and Ruby-based engine; Pokémon Essentials supplied existing Pokémon-style gameplay systems, such as
        movement, encounters and events. My contribution focused on procedural generation, integration,
        inspection/debugging tools and evaluation.
      </p>
      <p>
        The displayed Pokémon-related characters, tile artwork and other third-party graphical assets are not
        my original artwork and remain the property of their respective creators and rights holders.
      </p>
      <p>
        Pokémon Essentials was developed by Poccil and Maruno, with earlier inspiration and contributions from
        other developers. See the{' '}
        <a href="https://eeveeexpo.com/essentials/" target="_blank" rel="noopener noreferrer">
          Pokémon Essentials project and contributor credits ↗
        </a>.
      </p>
      <div className="pcg-disclaimer">
        <h3>Personal Project &amp; Intellectual Property Disclaimer</h3>
        <p>
          This is an independent, non-commercial final-year university project created for
          study, technical experimentation and personal interest in Pokémon-style RPGs and roguelike games.
          The game prototype has not been publicly released, sold or distributed, and it is not
          available for download. This portfolio only presents selected screenshots, demonstration
          videos and descriptions to document my technical work.
        </p>
        <p>
          This is an unofficial student project and is not affiliated with, sponsored by or endorsed by
          The Pokémon Company, Nintendo, Game Freak or Creatures Inc. Pokémon and related names,
          characters, artwork and other third-party content remain the property of their respective
          rights holders. I do not claim ownership of those assets or authorisation to redistribute them.
        </p>
        <p>
          RPG Maker XP, Pokémon Essentials, tilesets and sprites may have different terms of use or
          attribution requirements. Any future sharing of the playable game, project files or
          third-party assets would require checking the relevant permissions first.
        </p>
      </div>
    </section>
  )
}

function ProceduralContent({ project }) {
  return (
    <>
      <section className="detail-section">
        <h2>Project Overview</h2>
        <p>{project.description}</p>
        <div className="pcg-research-box">
          <h3>Project Goal</h3>
          <p>Build procedural map generators that create different environments inside RPG Maker XP and Pokémon Essentials while keeping the maps playable and compatible with existing game systems.</p>
          <p className="pcg-muted">The focus was developing and testing the map-generation systems, rather than building a complete roguelike game.</p>
        </div>
      </section>

      <YouTubeVideo
        videoId={project.coverVideoId}
        title="Procedural Map Generation Demonstration"
        description="This video demonstrates runtime generation as the player enters a map and the full-map inspection workflow used in RPG Maker XP."
        note="The player sees the newly generated map immediately, but the RPG Maker XP editor must be reopened to display the updated saved map data. This affects editor inspection rather than in-game generation."
      />

      <ProceduralMapSamples samples={project.mapSamples} />
      <SurfaceAndDiveSection image={project.surfaceWaterImage} />
      <ArchitectureSection />
      <TechnicalChallenges blockedImages={project.blockedPassageImages} />
      <ProceduralEvaluation project={project} />
      <ContributionAndSkills project={project} />
      <DevelopmentSection project={project} />
      <Outcomes project={project} />

      <YouTubeVideo
        videoId={project.walkthroughVideoId}
        title="Additional Development Walkthrough"
        description="A supplementary walkthrough of the wider RPG Maker XP and Pokémon Essentials environment, including player exploration, map transitions and existing gameplay interactions. This gives development context; the completed FYP focused on procedural map generation rather than a full roguelike implementation."
      />
      <ProceduralCredits />
    </>
  )
}

// Homepage and routing -----------------------------------------------------

const RPG_GREETING = "Hi, I'm Lydia!"

// Simple game-inspired icons, drawn directly in SVG (no icon package needed).
function AchievementIcon({ kind }) {
  const iconParts = {
    bug: (
      <>
        <path d="M8 6a4 4 0 0 1 8 0" />
        <path d="M7 8h10v7a5 5 0 0 1-10 0V8Z" />
        <path d="M12 8v12M3 13h4m10 0h4M5 7l3 3m8 0 3-3M4 19l4-4m8 0 4 4" />
      </>
    ),
    settings: (
      <>
        <path d="M3 7h12m4 0h2M3 17h3m4 0h11" />
        <circle cx="17" cy="7" r="2" />
        <circle cx="8" cy="17" r="2" />
      </>
    ),
    puzzle: (
      <path d="M4 4h6c-1 2 0 3 2 3s3-1 2-3h6v6c-2-1-3 0-3 2s1 3 3 2v6h-6c1-2 0-3-2-3s-3 1-2 3H4v-6c2 1 3 0 3-2s-1-3-3-2V4Z" />
    )
  }

  return (
    <svg
      className="achievement-icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {iconParts[kind]}
    </svg>
  )
}

// Starts typing when the dialogue is in view. Reduced-motion users see full text immediately.
function RpgGreeting() {
  // Initialise from the visitor's motion preference instead of calling
  // setState directly inside an effect (which triggers React's lint warning).
  const [visibleCount, setVisibleCount] = useState(() => {
    const reduceMotion = typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    return reduceMotion ? RPG_GREETING.length : 0
  })

  const finished = visibleCount >= RPG_GREETING.length
  const visibleText = RPG_GREETING.slice(0, visibleCount)
  const dialogueRef = useRef(null)
  const timerRef = useRef(null)
  const skippedRef = useRef(false)

  useEffect(() => {
    // Reduced-motion users already have the full greeting from initial state.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let started = false
    let observer

    function startTyping() {
      if (started || skippedRef.current) return
      started = true
      let characterCount = 0

      timerRef.current = window.setInterval(() => {
        if (skippedRef.current) {
          window.clearInterval(timerRef.current)
          timerRef.current = null
          return
        }
        characterCount += 1
        setVisibleCount(characterCount)

        if (characterCount >= RPG_GREETING.length) {
          window.clearInterval(timerRef.current)
          timerRef.current = null
        }
      }, 85)
    }

    if ('IntersectionObserver' in window && dialogueRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          startTyping()
          observer.disconnect()
        }
      }, { threshold: 0.25 })
      observer.observe(dialogueRef.current)
    } else {
      startTyping()
    }

    return () => {
      observer?.disconnect()
      if (timerRef.current !== null) window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  function skipTyping() {
    skippedRef.current = true
    if (timerRef.current !== null) window.clearInterval(timerRef.current)
    timerRef.current = null
    setVisibleCount(RPG_GREETING.length)
  }

  return (
    <div className="rpg-dialogue" ref={dialogueRef}>
      <span className="rpg-dialogue-name" aria-hidden="true">LYDIA</span>
      <h1 id="home-hero-title" aria-label={RPG_GREETING}>
        <span aria-hidden="true">{visibleText}</span>
        {!finished && <span className="rpg-typing-cursor" aria-hidden="true">▋</span>}
      </h1>
      <div className="rpg-dialogue-footer">
        {!finished && (
          <button type="button" className="rpg-skip-button" onClick={skipTyping}>
            Skip typing
          </button>
        )}
      </div>
    </div>
  )
}

const achievements = [
  {
    icon: 'bug',
    title: 'Bug Hunter',
    description: 'Finding, investigating and documenting issues through playtesting and UAT.'
  },
  {
    icon: 'settings',
    title: 'Systems Architect',
    description: 'Building gameplay mechanics and user interfaces.'
  },
  {
    icon: 'puzzle',
    title: 'Problem Solver',
    description: 'Investigating technical problems and developing solutions.'
  }
]

function Home() {
  return (
    <main className="home-page">
      <section className="hero" aria-labelledby="home-hero-title">
        <div className="hero-content">
          <p className="intro-label">GAMER · GAME QA · GAME DEVELOPMENT</p>
          <RpgGreeting />
          <h2>I love playing games, figuring out how they work, and making them better.</h2>
          <p className="hero-description">
            I'm a Computer Science graduate from Durham University with a passion for
            games, quality assurance and gameplay design. Whether I'm exploring
            game mechanics, investigating bugs or building my own projects, I enjoy
            understanding the details that make an experience fun and satisfying.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="button-primary" onClick={(event) => {
              // HashRouter uses the URL hash for routes; avoid changing the route to #projects.
              event.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Explore My Projects
            </a>
            <Link to="/about" className="button-secondary">About Me</Link>
          </div>
        </div>

        <aside className="hero-achievements" aria-label="My game development and QA strengths">
          <div className="hero-achievements-header">
            <span className="hero-achievements-kicker">PLAYER PROFILE</span>
            <span className="hero-achievements-decor" aria-hidden="true">✦ ✦ ✦</span>
          </div>
          <h3>Achievements Unlocked</h3>
          <p className="hero-achievements-intro">Three ways I approach games and development.</p>
          <div className="achievement-list">
            {achievements.map((achievement) => (
              <div className="achievement-row" key={achievement.title}>
                <span className="achievement-emblem" aria-hidden="true"><AchievementIcon kind={achievement.icon} /></span>
                <div className="achievement-copy">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="hero-achievements-footer">TEST · INVESTIGATE · IMPROVE</p>
        </aside>
      </section>

      <section id="projects" className="home-library" aria-labelledby="home-projects-heading">
        <div className="library-header">
          <div className="library-heading">
            <p className="intro-label">THE GAME LIBRARY</p>
            <h2 id="home-projects-heading">Featured Games &amp; Projects</h2>
          </div>
          <span className="library-count">{String(projects.length).padStart(2, '0')} GAMES OWNED</span>
          <p className="library-subtitle">
            A collection of things I've built, tested and explored — from gameplay systems to procedural map generation.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              type={project.type}
              genre={project.genre}
              projectStage={project.projectStage}
              description={project.description}
              skills={project.skills}
              image={project.image}
              imageAlt={project.imageAlt}
              slug={project.slug}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main>
        <h1>Project not found</h1>
        <Link to="/">Return to Homepage</Link>
      </main>
    )
  }

  return (
    <main className="project-page">
      <Link to="/" className="back-link">← Back to Projects</Link>
      <p className="intro-label">{project.type}</p>
      <h1>{project.title}</h1>
      {project.slug === 'procedural-generation'
        ? <ProceduralContent project={project} />
        : <DurhamMarketContent project={project} />}
      <Link to="/" className="back-link">← Back to Projects</Link>
    </main>
  )
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
