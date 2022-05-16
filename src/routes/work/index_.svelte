<div>
	<!-- HEADER -->
	<header class="header">
		<span> title </span>
	</header>

	<!-- BODY -->
	<div class="content">
		<div class="content-grid">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
		</div>
	</div>

	<!-- FOOTER -->
	<footer class="footer">
		<p>footer text</p>
	</footer>
</div>

<style>
	.header {
		position: fixed; /* don't move, no matter what */
		top: 0; /* position fixed removes it from the normal laytou flow, so we should tell it where to be */
		left: 0;
		right: 0;
		width: 100vw;
		background: lightskyblue;
		text-align: center;
	}

	.footer {
		/*
  same as .header above but pinned to bottom instead of top.
  you could reduce repetition by putting the common rules in their
  own class (.fixed or whatever) and then have a secondary class for
  .top or .bottom, but this is fine for the purposes of this demo.
  */
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100vw;
		background: lightskyblue;
		text-align: center;
	}

	.content {
		min-height: 100vh; /* as tall as the viewport because that's where we want to be centered */
		max-width: 80vw; /* limit width */
		margin: 0 auto; /* center horizontally */

		display: flex; /* vertical centering is easy with flex */
		flex-direction: column;
		justify-content: center; /* see? */

		/*
  you could also accomplish the vertical centering with
  flex-direction: row (the default) and align-items: center
  instead of justify-content, but this way makes more sense to
  me for whatever reason
  */
	}

	.content-grid {
		display: grid; /* establish the grid container */
		grid-template-columns: repeat(
			2,
			50%
		); /* for this we only need 2 equal columns */
		grid-template-rows: 70px 50px 100px 100px; /* just ballpark/eyeballed row heights to make it vaguely resemble your example image */
		gap: 1rem; /* space between the blocks */
	}

	.content-grid > * {
		background: aliceblue; /* just so you can see it */
	}

	.content-grid > :nth-child(n + 3) {
		/* 1n + 3 translates as 'every one-th item starting at item 3' */
		/*
  make every block after the first two occupy the entire row.
  start at gridline 1, end at the last one (aka -1)
  */
		grid-column: 1 / -1;
	}
</style>
