<script setup lang="ts">
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Avatar</h1>
			<p class="text-muted-foreground mt-2">
				An image element with a fallback for representing the user.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<div class="flex gap-4">
	<Avatar>
		<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
		<AvatarFallback>CN</AvatarFallback>
	</Avatar>
	<Avatar>
		<AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
		<AvatarFallback>VC</AvatarFallback>
	</Avatar>
</div>
			</div>
		</div>
	</div>
</template>
