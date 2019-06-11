// TeamData = require('../models/team_data');

exports.getDashboard = (req, res, next) => {

    let totalTeamData;
    let activeTeamData;
    let notActiveTeamData;

    let alumniTeamData;
    let activeTalentTeamData;
    let moveTeamData;

    let fullTeamData;
    let fsTeamData;
    let onBootcampTeamData;
    let notJoinTeamData;

    TeamData.count().then(total => {
        totalTeamData = total;
        return TeamData.count({
            where: {
                status: 1
            }
        });
    }).then(active => {
        activeTeamData = active;
        return TeamData.count({
            where: {
                status: 0
            }
        });
    }).then(notActive => {
        notActiveTeamData = notActive;
        return TeamData.count({
            where: {
                flagging: 'ALUMNI'
            }
        });
    }).then(alumni => {
        alumniTeamData = alumni;
        return TeamData.count({
            where: {
                flagging: 'ACTIVE TALENT'
            }
        });
    }).then(activeTalent => {
        activeTalentTeamData = activeTalent;
        return TeamData.count({
            where: {
                flagging: 'MOVE TEAM'
            }
        });
    }).then(moveTeam => {
        moveTeamData = moveTeam;
        return TeamData.count({
            where: {
                tipe_inovator: '100%'
            }
        });
    }).then(full => {
        fullTeamData = full;
        return TeamData.count({
            where: {
                tipe_inovator: '40/60'
            }
        });
    }).then(fs => {
        fsTeamData = fs;
        return TeamData.count({
            where: {
                tipe_inovator: 'Bootcamp'
            }
        });
    }).then(bootcamp => {
        onBootcampTeamData = bootcamp;
        return TeamData.count({
            where: {
                tipe_inovator: 'NotJoin'
            }
        });
    }).then(notJoin => {
        notJoinTeamData = notJoin;
        res.render('menu/index', {
            totalTeamData: totalTeamData,
            activeTeamData: activeTeamData,
            notActiveTeamData: notActiveTeamData,
            alumniTeamData: alumniTeamData,
            activeTalentTeamData: activeTalentTeamData,
            moveTeamData: moveTeamData,
            fullTeamData: fullTeamData,
            fsTeamData: fsTeamData,
            onBootcampTeamData: onBootcampTeamData,
            notJoinTeamData: notJoinTeamData,
            path: '/index',
            pageTitle: 'Dashboard'
        });
    }).catch(err => {
        console.log(err);
    });

};

exports.getInner = (req, res, next) => {
    res.render('menu/inner', {
        path: '/inner',
        pageTitle: 'Inner Dashboard'
    });
};