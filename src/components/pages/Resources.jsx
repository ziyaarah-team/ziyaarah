import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Resources.css";

export default function Resources() {
    return (
        <div className="app-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div>
                    {/* Logo / Brand */}
                    <div className="brand-container">
                        <div className="brand-logo">Z</div>
                        <div>
                            <h1 className="brand-title">Ziyarah</h1>
                            <span className="brand-subtitle">Journey to Hajj</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="nav-menu">
                        <Link to="/dashboard" className="nav-link">
                            <i className="fa-solid fa-house"></i> Dashboard
                        </Link>
                        <Link to="/hajj-planner" className="nav-link">
                            <i className="fa-solid fa-map"></i> Hajj Planner
                        </Link>
                        <Link to="/ritual-tracker" className="nav-link">
                            <i className="fa-solid fa-route"></i> Ritual Tracker
                        </Link>
                        <Link to="/resources" className="nav-link active">
                            <i className="fa-solid fa-book-open"></i> Resources
                        </Link>
                    </nav>
                </div>

                {/* User Profile Section */}
                <div className="user-section">
                    <div className="user-info">
                        <div className="user-avatar">A</div>
                        <div>
                            <p className="user-name">amina</p>
                            <p className="user-email">amina@gmail.com</p>
                        </div>
                    </div>
                    <Link to="/signout" className="sign-out-btn">
                        <i className="fa-solid fa-right-from-bracket"></i> Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="main-content">
                {/* Header Title */}
                <div className="page-header">
                    <h1>Resource Library</h1>
                    <p>Access authentic Islamic resources for your spiritual journey</p>
                </div>

                {/* Filters & Search */}
                <div className="filters-bar">
                    <div className="search-box">
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Search resources..." className="search-input" />
                    </div>
                    <select className="filter-select">
                        <option>All Categories</option>
                    </select>
                    <select className="filter-select">
                        <option>All Types</option>
                    </select>
                </div>

                {/* Featured Resources Section */}
                <section style={{ marginBottom: '40px' }}>
                    <h2 className="section-title">Featured Resources</h2>
                    <div className="cards-grid">
                        
                        {/* Featured Card 1 */}
                        <div className="resource-card">
                            <div>
                                <div className="card-top">
                                    <span className="tag tag-video"><i className="fa-solid fa-video"></i> Video</span>
                                    <span className="tag tag-featured"><i className="fa-solid fa-star"></i> Featured</span>
                                </div>
                                <h3 className="card-title">Complete Guide to Umrah Rituals - HD Video Series</h3>
                                <p className="card-desc">Comprehensive 3-hour video series covering all aspects of Umrah from ihram to completion, with English subtitles and Arabic audio.</p>
                            </div>
                            <div className="card-footer">
                                <span className="card-category">General</span>
                                <a href="#" className="view-link">View <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i></a>
                            </div>
                        </div>

                        {/* Featured Card 2 */}
                        <div className="resource-card">
                            <div>
                                <div className="card-top">
                                    <span className="tag tag-pdf"><i className="fa-solid fa-file-pdf"></i> PDF</span>
                                    <span className="tag tag-featured"><i className="fa-solid fa-star"></i> Featured</span>
                                </div>
                                <h3 className="card-title">Authentic Duas for Tawaf - Complete Collection</h3>
                                <p className="card-desc">Beautifully formatted PDF with 50+ authentic supplications to recite during Tawaf, with Arabic text, transliteration, and English translation.</p>
                            </div>
                            <div className="card-footer">
                                <span className="card-category">Tawaf</span>
                                <a href="#" className="view-link">View <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i></a>
                            </div>
                        </div>

                        {/* Featured Card 3 */}
                        <div className="resource-card">
                            <div>
                                <div className="card-top">
                                    <span className="tag tag-link"><i className="fa-solid fa-link"></i> Link</span>
                                    <span className="tag tag-featured"><i className="fa-solid fa-star"></i> Featured</span>
                                </div>
                                <h3 className="card-title">Day of Arafat: The Pinnacle of Hajj - Scholar Commentary</h3>
                                <p className="card-desc">In-depth article by renowned Islamic scholars explaining the spiritual significance and practical guidance for the most important day of Hajj.</p>
                            </div>
                            <div className="card-footer">
                                <span className="card-category">Arafat</span>
                                <a href="#" className="view-link">View <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i></a>
                            </div>
                        </div>

                    </div>
                </section>

                {/* All Resources Section */}
                <section>
                    <div className="section-header-flex">
                        <h2 className="section-title" style={{ margin: 0 }}>All Resources</h2>
                        <span className="badge-count">112</span>
                    </div>

                    <div className="resources-list">
                        {/* Resource Row Item 1 */}
                        <div className="resource-row">
                            <div className="resource-row-content">
                                <div className="row-tags">
                                    <span className="tag tag-video"><i className="fa-solid fa-video"></i> Video</span>
                                    <span className="row-category">General</span>
                                </div>
                                <h3 className="card-title" style={{ marginBottom: '4px' }}>Complete Guide to Umrah Rituals - HD Video Series</h3>
                                <p className="card-desc" style={{ margin: 0 }}>Comprehensive 3-hour video series covering all aspects of Umrah from ihram to completion, with English subtitles and Arabic audio.</p>
                            </div>
                            <button className="access-btn">
                                Access <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
                            </button>
                        </div>

                        {/* Resource Row Item 2 */}
                        <div className="resource-row">
                            <div className="resource-row-content">
                                <div className="row-tags">
                                    <span className="tag tag-pdf"><i className="fa-solid fa-file-pdf"></i> PDF</span>
                                    <span className="row-category">Tawaf</span>
                                </div>
                                <h3 className="card-title" style={{ marginBottom: '4px' }}>Authentic Duas for Tawaf - Complete Collection</h3>
                                <p className="card-desc" style={{ margin: 0 }}>Beautifully formatted PDF with 50+ authentic supplications to recite during Tawaf, with Arabic text, transliteration, and English translation.</p>
                            </div>
                            <button className="access-btn">
                                Access <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}