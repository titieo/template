<script>
	import SvelteLogo from 'virtual:icons/vscode-icons/file-type-svelte';
</script>

<main>
	<SvelteLogo style="width: 10rem; height: 10rem;" />
	<h1>Svelte App</h1>
</main>

<style>
	main {
		width: 100%;
		min-height: 100vh;
		background-image: linear-gradient(to bottom right, #7f00ff, #e100ff);

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	h1 {
		font-size: 2rem;
		font-weight: bold;
		color: white;
	}
</style>
