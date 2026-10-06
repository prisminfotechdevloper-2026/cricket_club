seasons
---------
id
name
start_date
end_date
is_current


players
---------
id
name
photo
role
bio
joining_year


coaches
---------
id
name
photo
role
bio


tournaments
---------
id
name
organizer
location
season_id


matches
---------
id
season_id
tournament_id
opponent
match_date
match_time
venue
status
result
score_link
cover_image


player_performances
---------
id
match_id
player_id

runs
balls
fours
sixes
strike_rate

overs
runs_conceded
wickets
economy

catches
runouts
stumpings

highlight
player_of_match


training_sessions
---------
id
season_id
coach_id
title
description
date
video_url
thumbnail


gallery_albums
---------
id
season_id
title
description
cover_image


gallery_items
---------
id
album_id
type
media_url
caption