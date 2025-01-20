import { Link } from "react-router";

export function Navigation() {
    return (
        <>
            <nav className="px-4 py-3">
                <ul className="flex flex-col text-white space-y-2">
                    <li><Link to="/" className="custom-link">Dashboard</Link></li>
                    <li><Link to="/crop" className="custom-link">Crop MNG</Link></li>
                    <li><Link to="/staff" className="custom-link">Staff MNG</Link></li>
                    <li><Link to="/equipment" className="custom-link">Equipment MNG</Link></li>
                    <li><Link to="/vehicle" className="custom-link">Vehicle MNG</Link></li>
                </ul>
            </nav>
        </>
    );
}
