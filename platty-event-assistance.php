<?php

/**
 * Plugin Name: Platty event assistance
 * Description: Shortcode to save the assistance for the current user into the events. usage = [log_user_into_event]
 * Version: 0.1
 * Author: Harvey Botero
 **/

add_action('wp_enqueue_scripts', 'initialize_js');
function initialize_js()
{
    wp_register_script('rest_post_call', plugin_dir_url(__FILE__) . '/js/script.js', array('jquery'), false, false);
    wp_enqueue_script('rest_post_call');
    wp_localize_script('rest_post_call', 'rpc_vars', array(
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'userID' => get_current_user_id(),
        'postID' => get_the_ID(),
        'postType' => get_post_type(get_the_ID()),
        'eventStatus' => get_post_meta(get_the_ID(), 'event-status', true),
    ));
}
