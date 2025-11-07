<script setup lang="ts">
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Navigation Menu</h1>
			<p class="text-muted-foreground mt-2">
				A collection of links for navigating websites.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div class="grid gap-3 p-6 md:w-[400px]">
									<NavigationMenuLink as-child>
										<a
											class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											href="#"
										>
											<div class="text-sm font-medium leading-none">
												Introduction
											</div>
											<p
												class="line-clamp-2 text-sm leading-snug text-muted-foreground"
											>
												Re-usable components built using Radix UI and
												Tailwind CSS.
											</p>
										</a>
									</NavigationMenuLink>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Components</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div class="grid gap-3 p-6 md:w-[400px]">
									<NavigationMenuLink as-child>
										<a
											class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											href="#"
										>
											<div class="text-sm font-medium leading-none">
												Alert Dialog
											</div>
											<p
												class="line-clamp-2 text-sm leading-snug text-muted-foreground"
											>
												A modal dialog that interrupts the user.
											</p>
										</a>
									</NavigationMenuLink>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	</div>
</template>
