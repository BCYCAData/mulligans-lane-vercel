<div
	class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
>
	<div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
		<h1 class="mb-8 text-3xl text-center">Welcome Back</h1>
		<form action="/api/data/testTable" method="POST">
			<input
				id="words"
				type="words"
				class="block border border-orange-700 w-full p-3 rounded mb-4"
				name="words"
				required={true}
				placeholder="Words"
				autocomplete="words"
			/>
			<button
				type="submit"
				class="w-full text-center py-3 rounded-full bg-orange-500 text-white hover:bg-orange-700 focus:outline-none my-1"
				>Sign In</button
			>
		</form>
	</div>
</div>
