import "./App.css";
import { useState } from "react";


const App = () => {
  type Note = {
    id: number;
    title: string;
    content: string;
  };

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "test note 1",
      content: "content1",
    },
    {
      id: 2,
      title: "test note 2 ",
      content: "content2",
    },
    {
      id: 3,
      title: "test note 3",
      content: "content3",
    },
    {
      id: 4,
      title: "test note 4 ",
      content: "content4",
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("title:", title, "content:", content);

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([newNote,...notes]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(event) => handleSubmit(event)}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid"></div>
      {notes.map((note) => (
        <div className="note-item">
          <div className="notes-header">
            <button>x</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
