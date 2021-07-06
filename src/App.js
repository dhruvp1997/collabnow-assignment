import AttendeesList from './components/AttendeesList';
import db from "./db.json";
import HostsList from "./components/HostsList"

function App() {
  const attendeesList = db.attendees;
  const hostsList = db.hosts;
  return (
    <div className="header">
            <HostsList hostsList={hostsList} />
            <AttendeesList attendeesList={attendeesList} />
    </div>
  );
}
export default App;
