<!-- Authenticated Right Dropdown -->

<!-- This Dropdown Is For Spark Settings Sreens - Vue Based
     Vue Based Dropdown Provides Better UX Experience On Settings Screens -->

<spark-nav-bar-dropdown inline-template>
    <!-- Settings -->
    <li class="dropdown-header">Settings</li>

    <li>
        <a href="/settings">
            <i class="fa fa-btn fa-fw fa-cog"></i>Your Settings
        </a>
    </li>

    <!-- Team Settings / List -->
    @if (Spark::usingTeams())
        <!-- Team Navigation Options -->
        <!-- Team Settings -->
        <li v-if="user.current_team_id">
            <a href="/settings/teams/@{{ user.current_team_id }}">
                <i class="fa fa-btn fa-fw fa-cog"></i>Team Settings
            </a>
        </li>

        <li class="divider"></li>

        <li class="dropdown-header">Teams</li>

        <!-- Create New Team -->
        <li>
            <a href="/settings?tab=teams">
                <i class="fa fa-btn fa-fw fa-plus"></i>Create New Team
            </a>
        </li>

        <!-- Team Listing -->
        <li v-repeat="team : teams">
            <a href="/settings/teams/switch/@{{ team.id }}">
                <span v-if="team.id == user.current_team_id">
                    <i class="fa fa-btn fa-fw fa-check text-success"></i>@{{ team.name }}
                </span>

                <span v-if="team.id !== user.current_team_id">
                    <i class="fa fa-btn fa-fw"></i>@{{ team.name }}
                </span>
            </a>
        </li>
    @endif

    <!-- Logout -->
    <li class="divider"></li>

    <li>
        <a href="/logout">
            <i class="fa fa-btn fa-fw fa-sign-out"></i>Logout
        </a>
    </li>
</spark-nav-bar-dropdown>
