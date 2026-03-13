-- Migration: Initial Schema
-- Created: 2024-03-11

CREATE TABLE IF NOT EXISTS about (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    bio TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL, -- 'design' or 'development'
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
);

-- Initial Data
INSERT OR IGNORE INTO about (id, bio) VALUES (1, 'I am a passionate creator who lives at the intersection of design and technology...');

INSERT OR IGNORE INTO skills (type, name) VALUES ('design', 'UI/UX Design'), ('design', 'Brand Identity'), ('design', 'Prototyping'), ('design', 'Interaction Design');
INSERT OR IGNORE INTO skills (type, name) VALUES ('development', 'Next.js / React'), ('development', 'TypeScript'), ('development', 'Tailwind CSS'), ('development', 'Cloudflare Stack');

INSERT OR IGNORE INTO projects (id, title, category, description, image) VALUES 
('1', 'Nova Dashboard', 'UI/UX Design', 'A comprehensive dashboard for monitoring cloud infrastructure.', '/project-1.jpg'),
('2', 'Lumina App', 'Mobile Design', 'An AI-powered application for smart home automation.', '/project-2.jpg');
