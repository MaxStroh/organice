templates.home = function(data) {
    const content = `
        <div id="home">
            <h2>OrgaNice - Home</h2>
            <img src="assets/images/organice-logo.png" align="left" style="width:70px;">
            <p>
                Login to see upcoming events
                <label for="group-name-input">Group Name:</label>
                <input id="group-name-input" type="text" />
                <label for="password-input">Password:</label>
                <input id="password-input" type="password" />
                <div id="submit" class="btn btn-success">
                    <i class="fas fa-calendar-check"></i>Get started!
                </div>
            </p>
        </div>
    `;

    return content;
};