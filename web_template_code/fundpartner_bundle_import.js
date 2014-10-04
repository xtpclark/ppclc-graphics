$data = array(
  'bundles' => array(
    'fundpartner' => (object) array(
      'type' => 'fundpartner',
      'name' => 'fundpartner',
      'base' => 'node_content',
      'module' => 'node',
      'description' => 'fund partner page',
      'help' => '',
      'has_title' => '1',
      'title_label' => 'Title',
      'custom' => '1',
      'modified' => '1',
      'locked' => '0',
      'disabled' => '0',
      'orig_type' => 'fundpartner',
      'disabled_changed' => FALSE,
      'bc_entity_type' => 'node',
    ),
  ),
  'fields' => array(
    'body' => array(
      'entity_types' => array(
        0 => 'node',
      ),
      'foreign keys' => array(
        'format' => array(
          'table' => 'filter_format',
          'columns' => array(
            'format' => 'format',
          ),
        ),
      ),
      'indexes' => array(
        'format' => array(
          0 => 'format',
        ),
      ),
      'settings' => array(),
      'translatable' => '0',
      'storage' => array(
        'type' => 'field_sql_storage',
        'settings' => array(),
        'module' => 'field_sql_storage',
        'active' => '1',
        'details' => array(
          'sql' => array(
            'FIELD_LOAD_CURRENT' => array(
              'field_data_body' => array(
                'value' => 'body_value',
                'summary' => 'body_summary',
                'format' => 'body_format',
              ),
            ),
            'FIELD_LOAD_REVISION' => array(
              'field_revision_body' => array(
                'value' => 'body_value',
                'summary' => 'body_summary',
                'format' => 'body_format',
              ),
            ),
          ),
        ),
      ),
      'field_name' => 'body',
      'type' => 'text_with_summary',
      'module' => 'text',
      'active' => '1',
      'locked' => '0',
      'cardinality' => '1',
      'deleted' => '0',
      'columns' => array(
        'value' => array(
          'type' => 'text',
          'size' => 'big',
          'not null' => FALSE,
        ),
        'summary' => array(
          'type' => 'text',
          'size' => 'big',
          'not null' => FALSE,
        ),
        'format' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => FALSE,
        ),
      ),
      'bundles' => array(
        'node' => array(
          0 => 'article',
          1 => 'page',
          2 => 'date',
          3 => 'volattach',
          4 => 'webform',
          5 => 'blog',
          6 => 'book',
          7 => 'juicebox_content',
          8 => 'iframe_page',
          9 => 'fundpartner',
        ),
      ),
    ),
    'field_fundpartner' => array(
      'translatable' => '0',
      'entity_types' => array(),
      'settings' => array(
        'uri_scheme' => 'public',
        'default_image' => 0,
      ),
      'storage' => array(
        'type' => 'field_sql_storage',
        'settings' => array(),
        'module' => 'field_sql_storage',
        'active' => '1',
        'details' => array(
          'sql' => array(
            'FIELD_LOAD_CURRENT' => array(
              'field_data_field_fundpartner' => array(
                'fid' => 'field_fundpartner_fid',
                'alt' => 'field_fundpartner_alt',
                'title' => 'field_fundpartner_title',
                'width' => 'field_fundpartner_width',
                'height' => 'field_fundpartner_height',
              ),
            ),
            'FIELD_LOAD_REVISION' => array(
              'field_revision_field_fundpartner' => array(
                'fid' => 'field_fundpartner_fid',
                'alt' => 'field_fundpartner_alt',
                'title' => 'field_fundpartner_title',
                'width' => 'field_fundpartner_width',
                'height' => 'field_fundpartner_height',
              ),
            ),
          ),
        ),
      ),
      'foreign keys' => array(
        'fid' => array(
          'table' => 'file_managed',
          'columns' => array(
            'fid' => 'fid',
          ),
        ),
      ),
      'indexes' => array(
        'fid' => array(
          0 => 'fid',
        ),
      ),
      'field_name' => 'field_fundpartner',
      'type' => 'image',
      'module' => 'image',
      'active' => '1',
      'locked' => '0',
      'cardinality' => '-1',
      'deleted' => '0',
      'columns' => array(
        'fid' => array(
          'description' => 'The {file_managed}.fid being referenced in this field.',
          'type' => 'int',
          'not null' => FALSE,
          'unsigned' => TRUE,
        ),
        'alt' => array(
          'description' => 'Alternative image text, for the image\'s \'alt\' attribute.',
          'type' => 'varchar',
          'length' => 512,
          'not null' => FALSE,
        ),
        'title' => array(
          'description' => 'Image title text, for the image\'s \'title\' attribute.',
          'type' => 'varchar',
          'length' => 1024,
          'not null' => FALSE,
        ),
        'width' => array(
          'description' => 'The width of the image in pixels.',
          'type' => 'int',
          'unsigned' => TRUE,
        ),
        'height' => array(
          'description' => 'The height of the image in pixels.',
          'type' => 'int',
          'unsigned' => TRUE,
        ),
      ),
      'bundles' => array(
        'node' => array(
          0 => 'fundpartner',
        ),
      ),
    ),
  ),
  'instances' => array(
    'body' => array(
      0 => array(
        'label' => 'Body',
        'widget' => array(
          'weight' => '1',
          'type' => 'text_textarea_with_summary',
          'module' => 'text',
          'active' => 1,
          'settings' => array(
            'rows' => '20',
            'summary_rows' => 5,
          ),
        ),
        'settings' => array(
          'text_processing' => '1',
          'display_summary' => 0,
          'user_register_form' => FALSE,
        ),
        'display' => array(
          'default' => array(
            'label' => 'hidden',
            'type' => 'text_default',
            'weight' => '2',
            'settings' => array(),
            'module' => 'text',
          ),
          'teaser' => array(
            'type' => 'hidden',
            'label' => 'above',
            'settings' => array(),
            'weight' => 0,
          ),
        ),
        'required' => 0,
        'description' => '',
        'default_value' => NULL,
        'field_name' => 'body',
        'entity_type' => 'node',
        'bundle' => 'fundpartner',
        'deleted' => '0',
      ),
    ),
    'field_fundpartner' => array(
      0 => array(
        'label' => 'fundpartner',
        'widget' => array(
          'weight' => '3',
          'type' => 'image_image',
          'module' => 'image',
          'active' => 1,
          'settings' => array(
            'progress_indicator' => 'throbber',
            'preview_image_style' => 'thumbnail',
          ),
        ),
        'settings' => array(
          'file_directory' => '',
          'file_extensions' => 'png gif jpg jpeg',
          'max_filesize' => '',
          'max_resolution' => '',
          'min_resolution' => '',
          'alt_field' => 0,
          'title_field' => 0,
          'default_image' => 0,
          'media_library_include_in_library' => 0,
          'user_register_form' => FALSE,
        ),
        'display' => array(
          'default' => array(
            'label' => 'hidden',
            'type' => 'image',
            'weight' => '1',
            'settings' => array(
              'image_style' => 'medium',
              'image_link' => '',
            ),
            'module' => 'image',
          ),
          'teaser' => array(
            'type' => 'hidden',
            'label' => 'above',
            'settings' => array(),
            'weight' => 0,
          ),
        ),
        'required' => 0,
        'description' => '',
        'field_name' => 'field_fundpartner',
        'entity_type' => 'node',
        'bundle' => 'fundpartner',
        'deleted' => '0',
      ),
    ),
  ),
);
