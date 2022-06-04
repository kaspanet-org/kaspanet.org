<template>
    <div class="home">
        
        <h5>What is Kaspa?</h5>
        <p>
            <a href="https://hashdag.medium.com/in-which-i-run-with-the-ghosts-of-my-hometown-95ad503c88c" target="_blank">The story of Kaspa</a>
        </p>
        
        <p>
            Kaspa is a proof-of-work cryptocurrency which implements <a href="https://eprint.iacr.org/2018/104.pdf" target="_blank">the GHOSTDAG protocol</a>. Unlike traditional blockchains, GHOSTDAG does not orphan blocks created in parallel, rather allows them to coexist and orders them in consensus. Whereby our blockchain is actually a block<i>DAG</i>; you can see GHOSTDAG in action in a real time <a href="http://kgi.Kaspanet.org/" target="_blank">blockDAG visualizer</a>). This generalization of Nakamoto consensus allows for secure operation while maintaining very high block rates (currently one block per second, aiming for 10/sec, dreaming of 100/sec) and minuscule confirmation times dominated by internet latency (cf. chapter 6 of the <a href="https://eprint.iacr.org/2018/104.pdf" target="_blank">the paper</a> for some initial benchmarks). The Kaspa implementation includes a lot of cool features and subprotocols including Reachability to query the DAG's topology, <a href="        https://research.kas.pa/t/some-of-the-intuition-behind-the-design-of-the-invalidation-rules-for-pruning/95
" target="_blank">Block data pruning</a> (with <a href="https://github.com/kaspanet/research/issues/3" target="_blank">near-future plans for block header pruning</a>), SPV proofs, and later subnetwork support which will make future implementation of layer 2 solutions much easier. 
        </p>
        <p>
            Kaspa is a community project, completely open source, no central governance, no biz model. Think Bitcoin, Litecoin, Monero, Grin, Kaspa. The mainnet was openly launched without premining or any other preallocation of coins.
        </p>
        


        <p>
            <a href="https://github.com/kaspanet/docs/blob/main/About%20Kaspa/Overview.md" target="_blank">Kaspa overview</a>
        </p>

<p>
            <a href="https://github.com/kaspanet/docs/blob/main/About%20Kaspa/Vision.md" target="_blank">Kaspa vision</a>
        </p>

        <p>
            <a href="https://hashdag.medium.com/kaspa-launch-plan-9a63f4d754a6" target="_blank">Kaspa growing pains I</a>
        </p>
        
        <p>
            <a href="https://hashdag.medium.com/Kaspa-launch-plan-responding-to-reality-6b4bec449037" target="_blank">Kaspa growing pains II</a>
        </p>


        <br>
        
        <h5>OK, but what <i>is</i> Kaspa? Can I understand how it works without reading a long research paper?</h5>
        
        <p>
        For a friendly overview of the core ideas of Kaspa, you can start with <a href="https://medium.com/@shai.wyborski/kaspa-what-are-we-actually-doing-here-fd7b2e420ad1" target="_blank">this post</a>.
        </p><p>
        For a more in-depth (but still not technical) account, you can proceed to these posts: <a href="https://someone235.medium.com/how-increasing-the-throughput-harms-bitcoins-security-76ed62313227" target="_blank">part 1</a> <a href="https://someone235.medium.com/scaling-bitcoin-with-blockdag-d785174a3402" target="_blank">part 2</a>.
        </p>
        <h5>Sounds interesting, how can I engage the Kaspa community?</h5>
        <p>
            The central hub of the community is currently the <a href="https://discord.gg/kS3SK5F36R" target="_blank">Discord server</a>. Other than that you are welcome to join our <a href="https://t.me/Kaspaenglish" target="_blank">Telegram channel</a> and <a href="https://www.reddit.com/r/Kaspa/" target="_blank">subreddit</a>. Please also follow this <a href="https://twitter.com/CurrencyKaspa" target="_blank">Twitter account</a>.
        </p>

        <h5>What kind of Hashing algorithm does Kaspa use?</h5>
        <p>
            Kaspa uses a modified version of <a href="https://arxiv.org/pdf/1911.05193.pdf" target="_blank">HeavyHash</a>. HeavyHash sandwhiches a matrix multiplication step between two "standard" hashes (e.g. keccak). The matrix multiplication phase is designed such that it would be efficient to calculate on specially designed photonic based devices in the future. The hash was chosen by the community in an open discussion a day before the mainnet has launched.
        </p>

        <h5>How can I get Kaspa?</h5>
        <p>
            There are currently three ways to obtain Kaspa:
            <ul>
                <li><strong>Mining</strong>: You can join the efforts by setting up a mining node, see instructions <a href="https://github.com/Kaspanet/docs/blob/main/Getting%20Started/Full%20Node%20Installation.md" target="_blank">here</a> and more detailed instruction for Windows users <a href="https://steemit.com/crypto/@Kaspa/Kaspa-quick-start-guide" target="_blank">here</a>.</li>
                <li><strong>Bounties</strong>: A lot of community members offer bounties for people who contribute to the Kaspa community and ecosphere by running servers, writing toturials, etc.. Check out the bounties channel in our <a href="https://discord.gg/kS3SK5F36R" target="_blank">Discord server</a>.</li>
                <li><strong>Trading</strong>: Kaspa has not been listed on any exchanges yet, however, there is a trading channel in our <a href="https://discord.gg/kS3SK5F36R" target="_blank">Discord server</a>.</li>
            </ul>
        </p>

        <br>

        <h5>What will be the total supply of Kaspa?</h5>
        <p>
        The monetary policy has two phases
        <ol>
            <li><strong>The pre-deflationary phase</strong> which will last throught the first six months of the network, during which block rewards will be 500 Kas per second.</li>
            <li>The chromatic phase in which block rewards geometrically decrease. The initial block reward will be 440 KAS. The block reward will be halved once per year, but smoothly: every month, we will decrease the block reward by a factor of (1/2)^(1/12).  (this means that the ratio of block rewards in consecutive months is exactly the same as the ratio of frequencies of two consecutive semitones in a tempered chromatic scale. The initial block reward is the frequency of the note A4, and every averaged year is hence called an octave).</li>
        </ol>
        Here, a year (or an octave) is 365.25 days, and a month (or semitone) is exactly one 12th of a year.
        </p>
        <p>
        Note that the policy dictates how many coins are minted per second regardless of the block rate. Should we change the block rate in the future, the reward will be adjusted accordingly to maintain the same emission rate.
        </p>
        <p>
        During the pre-deflationary phase (that is, now), we generate about 1.314 Billion Kaspa per month, or about 7.88 Billion Kaspa in total. The rest of the emission throughout the chromatic phase will total in about 20.6 Billion Kaspa. Hence, the supply cap is about 28.5 Billion (give or take about 100 Million which depend on exactly when the deflationary HF will kick in).
        </p>


        <h5>Can I mine Kaspa on a GPU?</h5>
        <p>
        A CUDA based <a href="https://github.com/tmrlvi/kaspa-miner" target="_blank">GPU Miner</a> has emerged from the community.
        </p>

        <h5>Is there a Kaspa wallet?</h5>
        <p>
          There are currently 3 types of wallets:
          <ul>
            <li><a href="https://wallet.kaspanet.io/">Kaspa web wallet</a> - Kaspa Web Wallet is the most user-friendly wallet available on the market today. The simple and easy-to-use interface makes it easy for you to send and receive payments.</li>
            <li><a href="https://kdx.app/">Desktop wallet - KDX</a> - KDX process manager provides zero-effort installation and configuration of the Kaspa full-node software and the Kaspa Wallet when running in a desktop operating system environment.</li>
            <li><a href="https://github.com/kaspanet/kaspad">Kaspa Command Line Wallet</a></li>
          </ul>
        </p>
        
        <h5>Useful Links</h5>
        <p>
            <ul>
                <li>Community hubs: <a href="https://discord.gg/kS3SK5F36R" target="_blank">Discord server</a>, <a href="https://t.me/Kaspaenglish" target="_blank">Telegram channel</a>, <a href="https://www.reddit.com/r/Kaspa/" target="_blank">subreddit</a>, <a href="https://twitter.com/CurrencyKaspa" target="_blank">Twitter account</a>.</li>
                <li>Getting started guides: <a href="https://github.com/Kaspanet/docs/blob/main/Getting%20Started/Full%20Node%20Installation.md" target="_blank">the "official" guide</a>,  <a href="https://steemit.com/crypto/@Kaspa/Kaspa-quick-start-guide" target="_blank">screenshot guide for Windows users</a>.</li>
                <li>Diagnostic tools: <a href="http://katnip.Kaspanet.org/" target="_blank">Katnip block explorer</a> (<a href="http://blockexplorer.Kaspanet.org/" target="_blank">Mirror</a>), <a href="http://kgi.Kaspanet.org/" target="_blank">KGI blockDAG visualizer</a>, <a href="http://kasboard.Kaspanet.org/" target="_blank">Kaspa board</a>.</li>
                <li><a href="https://github.com/tmrlvi/kaspa-miner/releases/latest" target="_blank">GPU Miner</a>.</li>
            </ul>
        </p>

        <br>

    </div>
</template>
