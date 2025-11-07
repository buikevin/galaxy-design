<script setup lang="ts">
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Tabs</h1>
			<p class="text-muted-foreground mt-2">
				A set of layered sections of content—known as tab panels—that are displayed one at
				a time.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<Tabs default-value="account" class="w-[400px]">
					<TabsList class="grid w-full grid-cols-2">
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
					</TabsList>
					<TabsContent value="account" class="space-y-2">
						<div class="space-y-1">
							<h3 class="text-sm font-medium">Account</h3>
							<p class="text-sm text-muted-foreground">
								Make changes to your account here. Click save when you're done.
							</p>
						</div>
					</TabsContent>
					<TabsContent value="password" class="space-y-2">
						<div class="space-y-1">
							<h3 class="text-sm font-medium">Password</h3>
							<p class="text-sm text-muted-foreground">
								Change your password here. After saving, you'll be logged out.
							</p>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	</div>
</template>
