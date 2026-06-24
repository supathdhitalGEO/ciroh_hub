import React, { useEffect, useState } from 'react';
import GitHubMarkdown from './GitHubMarkdown'

// Unfortunately, a feature request for this appears to have spent two years
// untouched, so this is not currently something we can do.
// It's highly desirable as a feature, though, so I've left the stub here in the meantime.
// 
// - Nia Minor, 06/12/2026

function GitHubWikiPage({ repo, username, path = 'home', trimTitle = 'false' }) {
    // Construct the GitHub API URL to fetch the wiki page as HTML
    const apiUrl = `api-url-here`;
    const srcUrl = `https://github.com/${username}/${repo}/wiki/${path}`;
    const cwdUrl = `https://github.com/${username}/${repo}/`; // This appears to be the documented behavior for image referencing (?)

    // Render the HTML content
    //return <GitHubMarkdown apiUrl={apiUrl} srcUrl={srcUrl} cwdUrl={cwdUrl} trimTitle={trimTitle} />;
    return "Unsupported pending a GitHub API update. See https://github.com/orgs/community/discussions/102891#discussioncomment-8340473";
}

export default GitHubWikiPage;
