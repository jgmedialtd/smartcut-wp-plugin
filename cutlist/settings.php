<?php

namespace SmartCut\Cutlist\Settings;

/**
 * get an array of product categories from a comma separated string
 * @param string $cutlistCategories
 * @return string[]
 */
function getProductCategories($cutlistCategories)
{
	$cutlistCategories = explode(',', str_replace(' ', '', $cutlistCategories));

	$categories = [];

	foreach ($cutlistCategories as $category) {
		$categories[] = $category;
	}

	return $categories;
}
