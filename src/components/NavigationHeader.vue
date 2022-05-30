<template>
    <nav class="navbar navbar-dark navbar-expand-md fixed-top shadow-sm bg-white">
        <div class="container">
            <div class="brand">
                <router-link class="navbar-brand" to="/">
                    <img src="@/assets/logo.svg" width="48" />
                </router-link>
            </div>

            <div class="d-flex flex-grow-1" id="navbarContent">
                <ul class="navbar-nav ms-auto mx-lg-auto flex-row">
                    <li class="nav-item me-3">
                        <a class="nav-link" href="https://discord.gg/kS3SK5F36R" target="_blank">DISCORD</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="https://github.com/kaspanet/kaspad" target="_blank">GITHUB</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/elichai/kaspa-miner" target="_blank">MINER</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/tmrlvi/kaspa-miner" target="_blank">GPU MINER</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
